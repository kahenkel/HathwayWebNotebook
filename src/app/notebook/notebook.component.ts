import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

import { Note } from './note';
import { NoteService } from './notebook.service';

@Component({
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css'],
})
export class NotebookComponent implements OnInit, OnDestroy {
  notes: Note[] = [];
  currentNote!: Note;
  pageIndex: number = 0;
  noteField = new FormControl('');

  private noteChangeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService
  ) {}

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();

    this.noteChangeSub = this.noteField.valueChanges
      .pipe(
          debounceTime(500), 
          distinctUntilChanged())
      .subscribe((newVal) => {
        this.currentNote.noteText = newVal;
        this.noteService.saveNotes(this.notes);
      });

    this.route.paramMap.subscribe((params: ParamMap) => {
      // ensure valid page number
      let pageIndexParam = Number(params.get('page')) || 0;
      this.pageIndex = Math.min(Math.max(pageIndexParam, 0), this.notes.length - 1);
      
      this.currentNote = this.notes[this.pageIndex];

      // update field with note text, but do not trigger value change event
      this.noteField.setValue(this.currentNote.noteText, { emitEvent: false });
    });
  }

  ngOnDestroy(): void {
    this.noteChangeSub.unsubscribe();
  }

  hasPrevPage(): boolean {
    return this.pageIndex > 0;
  }

  hasNextPage(): boolean {
    return this.pageIndex < this.notes.length - 1;
  }

  getPrevPageIndex(): number {
    return this.pageIndex - 1;
  }

  getNextPageIndex(): number {
    return this.pageIndex + 1;
  }

  getBackgroundClass(): string {
    return this.currentNote.bgClass;
  }
}

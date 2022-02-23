import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor() {}

  getNotes(): Note[] {
    const sessionData = sessionStorage.getItem('hathway-notes');
    if (sessionData) {
      return JSON.parse(sessionData);
    }

    return [
      { label: '1', noteText: '', bgClass: 'bg-1' },
      { label: '2', noteText: '', bgClass: 'bg-2' },
      { label: '3', noteText: '', bgClass: 'bg-3' },
      { label: '4', noteText: '', bgClass: 'bg-4' },
      { label: '5', noteText: '', bgClass: 'bg-5' },
    ];
  }

  saveNotes(notes: Note[]) {
    const jsonData = JSON.stringify(notes);
    sessionStorage.setItem('hathway-notes', jsonData);
  }
}

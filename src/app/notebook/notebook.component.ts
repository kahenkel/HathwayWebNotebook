import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NotepageComponent } from '../notepage/notepage.component';
import { Note } from './note';

@Component({
    templateUrl: './notebook.component.html',
    styleUrls: ['./notebook.component.css']
})
export class NotebookComponent {
    title = 'Hathway Web Notebook';
    pageIndex: number = 0;  
    readonly maxPages: number = 5;

    currentPage!: Note;
    pages: Note[] = [
        { label: '1', noteText: '', bgClass: 'bg-1' },
        { label: '2', noteText: '', bgClass: 'bg-2' },
        { label: '3', noteText: '', bgClass: 'bg-3' },
        { label: '4', noteText: '', bgClass: 'bg-4' },
        { label: '5', noteText: '', bgClass: 'bg-5' },
    ];

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {

        this.route.paramMap.subscribe((params: ParamMap) => {
            let pageParam = Number(params.get('page'));
            // ensure page number is valid
            this.pageIndex = Math.min(Math.max(pageParam, 1), this.maxPages);
            this.currentPage = this.pages[this.pageIndex];
            // load notes from session
        });
    }

    hasPrevPage(): boolean {
        return this.pageIndex > 1;
    }

    hasNextPage(): boolean {
        return this.pageIndex < this.maxPages;
    }

    getPrevPageNum(): number {
        return this.pageIndex - 1;
    }

    getNextPageNum(): number {
        return this.pageIndex + 1;
    }

    getBackgroundClass(): string {
        return this.currentPage.bgClass;
    }
}

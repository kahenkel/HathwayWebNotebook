import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotebookComponent } from './notebook/notebook.component';

const routes: Routes = [
  { path: 'note/:page', component: NotebookComponent },
  { path: '', redirectTo: '/note/0', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

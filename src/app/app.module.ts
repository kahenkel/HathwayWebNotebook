import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NotebookComponent } from './notebook/notebook.component';
import { NotepageComponent } from './notepage/notepage.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    NotebookComponent,
    NotepageComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './left-sidebar/notes/notes.component';
import { HeaderComponent } from './nav/header/header.component';
import { NoteAreaComponent } from './writing-pad/note-area/note-area.component';
import { TextAreaComponent } from './writing-pad/text-area/text-area.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    HeaderComponent,
    NoteAreaComponent,
    TextAreaComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

interface ITEM {
  title:string,
  descrip:string
}
export class AppComponent {

  // here text == to inputValue from child component (note-area)
   noteList = {
    "text" : '',
    "textNote" : '',
    "leftTitle" : '',
  }

  notes: ITEM[] = []

  title = ''

  addTitleText(value:string){
    this.title = value
  }

  addNoteText(note:string) {
    this.noteList.text = this.title;
    this.noteList.textNote = note;
    // console.log(this.title);
    // console.log(note);
    const item:ITEM = {
      title: this.title,
      descrip: note,
    }
    this.notes.push(item)
  }
}

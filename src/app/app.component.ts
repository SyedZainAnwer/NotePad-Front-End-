import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'notepad';
  // here text == to inputValue from child component (note-area)
   noteList = {
    "text" : '',
    "textNote" : '',
  }


  addTitleText(value:string){
    this.noteList.text = value
  }

  addNoteText(sideBarTitleValue:string) {
    this.noteList.text = sideBarTitleValue;
    // this.noteList.textNote = note;
  }
}

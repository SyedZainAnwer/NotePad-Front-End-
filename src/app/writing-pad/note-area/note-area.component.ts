import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-area',
  templateUrl: './note-area.component.html',
  styleUrls: ['./note-area.component.css'],
})
export class NoteAreaComponent {
  constructor() {}
  inputValue:string = ''
  @Output() onAddText = new EventEmitter<string>();

  onAdd(){
    this.onAddText.emit(this.inputValue);
    this.inputValue = '';
  }

  onTextAdd() {
    this.onAddText.emit(this.inputValue)
  }
}

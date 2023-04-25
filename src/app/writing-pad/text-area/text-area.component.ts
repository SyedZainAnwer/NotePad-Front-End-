import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {

  @Output() onSubmitText = new EventEmitter<string>();
  @Input() value = '';

  sideBarTitleValue = '';
  textField:string = '';

  name:string = '';

  // title:string = "Title";

  handleClear(){
    this.value = '';
    this.textField = '';
  }

  handleSubmit(){
    this.onSubmitText.emit(this.textField);
    this.onSubmitText.emit(this.sideBarTitleValue);
  }
}

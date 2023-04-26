import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {

  @Output() onSubmitNewText = new EventEmitter<string>();
  @Input() value = '';

  sideBarTitleValue:string = '';
  textField:string = '';

  name:string = '';

  // title:string = "Title";


  handleSubmit(){
    this.onSubmitNewText.emit(this.textField);
    // this.onSubmitNewText.emit(this.sideBarTitleValue);
  }

  handleClear(){
    this.value = '';
    this.textField = '';
  }
}

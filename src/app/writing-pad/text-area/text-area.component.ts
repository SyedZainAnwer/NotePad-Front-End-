import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {

  @Input() value = '';
  // value = '';

  // addTitle (value:string){
  //   this.value = value
  // }

  name:string = '';

  title:string = "Title";
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notepad';
  // here text == to inputValue from child component (note-area)
  text = '';

  // addUser(){
  //   console.log('user added')
  // }

  // postComment(){
  //   console.log('comment posted')
  // }
  addtext(value:string){
    this.text = value
  }
}

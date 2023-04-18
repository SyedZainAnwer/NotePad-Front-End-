import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notepad';
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

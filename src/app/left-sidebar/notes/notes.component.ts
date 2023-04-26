import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
//   notes = [
//     {
//     title:'Test1',
//     descrip:'descrip 1'
//   },
//   {
//     title:'Test1',
//     descrip:'descrip 1'
//   },
//   {
//     title:'Test1',
//     descrip:'descrip 1'
//   },
//   {
//     title:'Test1',
//     descrip:'descrip 1'
//   },
//   {
//     title:'Test1',
//     descrip:'descrip 1'
//   },
// ]
  @Input() value:string = '';
  @Input() note:string = '';

}

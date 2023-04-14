import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-note-area',
  templateUrl: './note-area.component.html',
  styleUrls: ['./note-area.component.css']
})
export class NoteAreaComponent implements OnInit {

  model!: NgbDateStruct;

  constructor(
    private modalService: NgbModal
  ) {
    this.modalService.activeInstances.subscribe((list) => {
      this.modalsNumber = list.length;
    })}

    ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
;


openTruckModal(truckModal:any) {
    this.modalService.open(truckModal, { size: 'lg' });
  }

  modalsNumber = 0;

}

import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.scss']
})
export class UserManagmentComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }
   openModal(content) {
    this.modalService.open(content, { size: 'lg', windowClass: 'modal-user' }).result.then((result) => {
    }, (reason) => {
    });
  }
}

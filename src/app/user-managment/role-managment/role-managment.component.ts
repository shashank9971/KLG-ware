import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-role-managment',
  templateUrl: './role-managment.component.html',
  styleUrls: ['./role-managment.component.scss']
})
export class RoleManagmentComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    console.log('Role comp');
  }
  openModal(content) {
    this.modalService.open(content, { size: 'lg', windowClass: 'modal-user' }).result.then((result) => {
    }, (reason) => {
    });
  }
}

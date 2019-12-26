import { Component, OnInit } from '@angular/core';
import {Customer} from './customer';
import {CUSTOMERS} from '../mock-customer';
import {ModalService} from '../modal.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
customers = CUSTOMERS;
  bodyText: string;
  bodyContent: string;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.bodyText = '';
    this.bodyContent = '<p>sdfsdf</p>';
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

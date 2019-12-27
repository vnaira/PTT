import { Component, OnInit } from '@angular/core';
import {Customer} from './customer';
import {CUSTOMERS} from '../mock-customer';
import {ModalService} from '../modal.service';
import {Router} from '@angular/router';
import {CustomerService} from '../customer.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  bodyText: string;
  bodyContent: string;
  constructor(private modalService: ModalService, private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
   this.getAllCustomer();

  }

  openModal(id: string) {
    this.modalService.open(id);
    this.router.navigate(['/order']);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  getAllCustomer(): void {
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }
}

import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../customers/customer';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
ordersList: Customer[];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getOrder();
  }

  getOrder(): void {
    this.customerService.getCustomers().subscribe(customers => this.ordersList = customers);
  }
}

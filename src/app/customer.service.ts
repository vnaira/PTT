import { Injectable } from '@angular/core';
import {Customer} from './customers/customer';
import {Observable, of} from 'rxjs';
import {CUSTOMERS} from './mock-customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return of(CUSTOMERS);
  }
}

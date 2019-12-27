import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { ModalModule } from './modal/modal.module';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { CustomerService } from './customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

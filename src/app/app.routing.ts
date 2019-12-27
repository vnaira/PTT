import { Routes, RouterModule } from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {OrderComponent} from './order/order.component';


const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'order', component: OrderComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);

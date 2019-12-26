import { Routes, RouterModule } from '@angular/router';
import {CustomersComponent} from './customers/customers.component';


const routes: Routes = [
  { path: '', component: CustomersComponent },
  // { path: 'test-page', component: TestPageComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal.component';
import {appRoutingModule} from '../app.routing';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    appRoutingModule
  ],
  exports: [ModalComponent]
})
export class ModalModule {
}

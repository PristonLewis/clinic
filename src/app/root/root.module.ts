import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RootRoutingModule
  ]
})
export class RootModule { }

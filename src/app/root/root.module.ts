import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RootRoutingModule } from './root-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { DoctorsViewComponent } from './doctors-view/doctors-view.component';

@NgModule({
  declarations: [LoginComponent, DoctorsViewComponent],
  imports: [
    CommonModule,
    RootRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpService
  ],
  exports: [LoginComponent]
})
export class RootModule { }

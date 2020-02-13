import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RootRoutingModule } from './root-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { DoctorsViewComponent } from './components/doctors-view/doctors-view.component';
import { UsersearchComponent } from './components/usersearch/usersearch.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, DoctorsViewComponent, UsersearchComponent],
  imports: [
    CommonModule,
    RootRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpService
  ],
  exports: [LoginComponent]
})
export class RootModule { }

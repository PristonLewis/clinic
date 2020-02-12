import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './root/components/login/login.component';
import { UsersearchComponent } from './root/components/usersearch/usersearch.component';
import { BookappappointmentComponent } from './root/components/bookappappointment/bookappappointment.component'
import { DoctorsViewComponent } from './root/components/doctors-view/doctors-view.component';

const routes: Routes = [{ path: '', component: LoginComponent, pathMatch: 'full' },
{ path: 'usersearch', component: UsersearchComponent },
{ path: 'doctorsview', component: DoctorsViewComponent },
{ path: '**', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

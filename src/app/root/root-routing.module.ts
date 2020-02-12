import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersearchComponent } from './components/usersearch/usersearch.component';
import { BookappappointmentComponent } from './components/bookappappointment/bookappappointment.component';

const routes: Routes = [
  { path: 'bookslot', component: BookappappointmentComponent },
  { path: 'usersearch', component: UsersearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }

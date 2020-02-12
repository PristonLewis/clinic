import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersearchComponent } from './components/usersearch/usersearch.component';
import { BookappappointmentComponent } from './components/bookappappointment/bookappappointment.component';

const routes: Routes = [
  { path: 'usersearch', component: UsersearchComponent },
  { path: 'bookslot', component: BookappappointmentComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }

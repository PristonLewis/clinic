import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-doctors-view',
  templateUrl: './doctors-view.component.html',
  styleUrls: ['./doctors-view.component.sass']
})
export class DoctorsViewComponent implements OnInit {

  public ondate;
  public fromtime;
  public totime;
  public doctorDetail;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getRequest('/doctors/bookedslots/'+ localStorage.getItem('doctorid')).subscribe((data) => {
      console.log('data', data);
      this.doctorDetail = data;
    });
  }
  public addSlots(): void {
    const payload = {
      blockDate: this.ondate,
      fromTime: this.fromtime,
      toTime: this.totime
    }
    this.http.postRequest('/doctors/'+ localStorage.getItem('doctorid')+ '/slotdetails', payload).subscribe((data) => {
      swal.fire("Success");
    }, (exception) => {
      swal.fire("Fail");
    });
  }

}

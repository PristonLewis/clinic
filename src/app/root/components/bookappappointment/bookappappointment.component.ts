import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookappappointment',
  templateUrl: './bookappappointment.component.html',
  styleUrls: ['./bookappappointment.component.sass']
})
export class BookappappointmentComponent implements OnInit {

  bookform: FormGroup;
  submitted = false;
  public errFlag;
  public doctors;
  public doctordetails;
  public slotdate;
  constructor(private httpService: HttpService, private formBuilder: FormBuilder,
    private router: Router) {
  }
  ngOnInit() {


    this.bookform = this.formBuilder.group({

      mobile: [''],
      username: [''],
      email: [''],
      bookslot: ['']
    });
  }
  setSlot(slot) {
    console.log('setting slot', slot)
    this.slotdate = slot;
  }
  get f() { return this.bookform.controls; }

  public onSubmit(): void {


    console.log(this.bookform.value);
    this.submitted = true;
    const payload = this.bookform.value;
    payload.slot = this.slotdate;
    payload.doctorId = localStorage.getItem('doctorid');
    this.httpService.postRequest('/booking/userSlotBook/', payload).subscribe(
      (data) => {
        console.log(data);


      }, (exception) => {
        this.errFlag = true;

      });


  }

}

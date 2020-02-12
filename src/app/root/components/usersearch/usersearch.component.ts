import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.sass']
})
export class UsersearchComponent implements OnInit {

  searchform: FormGroup;
  bookform: FormGroup;
  submitted = false;
  public errFlag;
  public doctors;
  public doctordetails;
  public bookslotdet
  constructor(private httpService: HttpService, private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {

    this.httpService.getRequest('/doctors/allDoctors').subscribe(
      (data) => {


        this.doctors = data.doctors;
        console.log(this.doctors);

      }, (exception) => {
        this.errFlag = true;

      });


    this.searchform = this.formBuilder.group({

      categery: [''],
      specialist: [''],
      location: [''],
    });

    this.bookform = this.formBuilder.group({

      firstName: [''],
      lastName: [''],
      mobile: [''],
      email: [''],
      slot: ['']
    });

  }

  get f() { return this.searchform.controls; }



  public onSubmit(): void {


    console.log(this.searchform.value);
    this.submitted = true;
    this.httpService.getRequest('/doctors/searchdoctors/' + this.searchform.value.location.trim() + '/'
      + this.searchform.value.categery.trim() +
      '/' + this.searchform.value.specialist.trim()).subscribe(
        (data) => {
          console.log(data);
          this.doctordetails = data;

        }, (exception) => {
          this.errFlag = true;

        });


  }

  navigate(id) {
    console.log('doctor id', id);
    this.httpService.getRequest('/doctors/bookedslots/' + id).subscribe(
      (data) => {
        console.log(data);
        this.bookslotdet = data.booking;

        $('#exampleModal').modal('show');

      }, (exception) => {
        this.errFlag = true;

      });

  }




  public onSubmitbookdet(): void {


    console.log(this.bookform.value);
    this.submitted = true;
    this.httpService.postRequest('/booking/userSlotBooking/', this.bookform.value).subscribe(
      (data) => {
        console.log(data);


      }, (exception) => {
        this.errFlag = true;

      });


  }



}

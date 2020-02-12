import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.sass']
})
export class UsersearchComponent implements OnInit {

  searchform: FormGroup;
  submitted = false;
  public errFlag;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {

    this.searchform = this.formBuilder.group({

      DoctorName: [''],
      Category: [''],
      Specailist: [''],
      Location: [''],
      date: ['']
    });
  }
  get f() { return this.searchform.controls; }

  public onSubmit(): void {

    console.log(this.searchform.value);

    this.submitted = true;
    this.httpService.postRequest('users/login', this.searchform.value).subscribe(
      (data) => {

      }, (exception) => {
        this.errFlag = true;

      });


  }

}

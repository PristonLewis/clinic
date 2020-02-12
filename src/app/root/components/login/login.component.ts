import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup ({
    username: new FormControl(),
    password: new FormControl(),
  });
  constructor(private formBuilder: FormBuilder, private http: HttpService) { }

  ngOnInit() {
    this.createForm();
  }

  // gets login form controls
  get loginControl() { return this.loginForm.controls; }

  // create a reactive login form
  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(4)]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)]]
    });
  }

  // checks whether the user is authorized
  public login(): void {
    console.log('loginFrom', this.loginForm.value);
  }
}

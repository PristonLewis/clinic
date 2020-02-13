import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpService } from '../../services/http.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';
let api = HttpService;
const spyhttp = {
    postMethod: (endpoint, payload) => {
        return true;
    }
};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule, RouterTestingModule],
      declarations: [ LoginComponent ],
      providers: [HttpClient]
    })
    .compileComponents();
    api = TestBed.get(HttpService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', () => {
    component.login();
  });
});

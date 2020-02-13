import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpService } from '../../services/http.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject } from 'rxjs';
import { Location } from '@angular/common';
// let httpService: HttpService;
let spy: any;

const router = {
    navigate: (arr) => {
        return true;
    }
};

const httpService = {
  postRequest: () => {
    return of({});
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
    // api = TestBed.get(HttpService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', async(()  => {
    component.login();
    const subject = new Subject();
    spy = spyOn(httpService, 'postRequest').and.returnValue(of({data: {doctorId: 1}}));
    localStorage.setItem('doctorid', '1');
    expect(component).toBeTruthy();
  }));

  it('should patient login', () => {
    component.patientLogin();
    expect(component).toBeTruthy();
  });
});

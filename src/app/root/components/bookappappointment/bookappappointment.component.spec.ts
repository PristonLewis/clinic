import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookappappointmentComponent } from './bookappappointment.component';

describe('BookappappointmentComponent', () => {
  let component: BookappappointmentComponent;
  let fixture: ComponentFixture<BookappappointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookappappointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookappappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});

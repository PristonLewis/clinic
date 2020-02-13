import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DoctorsViewComponent } from './doctors-view.component';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../services/http.service';
import { HttpClientModule } from '@angular/common/http';
describe('DoctorsViewComponent', () => {
  let component: DoctorsViewComponent;
  let fixture: ComponentFixture<DoctorsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [ DoctorsViewComponent ],
      providers: [HttpService, HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // jasmine.createSpy('postRequest').and.callThrough();
    component.addSlots()
    expect(component).toBeTruthy();
  });

  it('should get all doctors', () => {
    component.ngOnInit();
    jasmine.createSpy('postRequest').and.callThrough();
  });
});

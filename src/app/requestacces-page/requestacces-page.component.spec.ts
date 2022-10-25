import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestaccesPageComponent } from './requestacces-page.component';

describe('RequestaccesPageComponent', () => {
  let component: RequestaccesPageComponent;
  let fixture: ComponentFixture<RequestaccesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestaccesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestaccesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

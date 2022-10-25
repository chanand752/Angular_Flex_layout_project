import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValadiationComponent } from './form-valadiation.component';

describe('FormValadiationComponent', () => {
  let component: FormValadiationComponent;
  let fixture: ComponentFixture<FormValadiationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValadiationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValadiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

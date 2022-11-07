import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValadiationFormGroupComponent } from './form-valadiation-form-group.component';

describe('FormValadiationFormGroupComponent', () => {
  let component: FormValadiationFormGroupComponent;
  let fixture: ComponentFixture<FormValadiationFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValadiationFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValadiationFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

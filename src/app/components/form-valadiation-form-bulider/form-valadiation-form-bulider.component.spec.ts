import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValadiationFormBuliderComponent } from './form-valadiation-form-bulider.component';

describe('FormValadiationFormBuliderComponent', () => {
  let component: FormValadiationFormBuliderComponent;
  let fixture: ComponentFixture<FormValadiationFormBuliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValadiationFormBuliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValadiationFormBuliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

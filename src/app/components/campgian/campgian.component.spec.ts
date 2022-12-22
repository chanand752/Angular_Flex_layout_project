import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampgianComponent } from './campgian.component';

describe('CampgianComponent', () => {
  let component: CampgianComponent;
  let fixture: ComponentFixture<CampgianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampgianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampgianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

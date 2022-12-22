import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampgianDialogComponent } from './campgian-dialog.component';

describe('CampgianDialogComponent', () => {
  let component: CampgianDialogComponent;
  let fixture: ComponentFixture<CampgianDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampgianDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampgianDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

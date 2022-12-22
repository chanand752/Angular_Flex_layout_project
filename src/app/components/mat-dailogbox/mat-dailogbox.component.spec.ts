import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDailogboxComponent } from './mat-dailogbox.component';

describe('MatDailogboxComponent', () => {
  let component: MatDailogboxComponent;
  let fixture: ComponentFixture<MatDailogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDailogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDailogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressLabelComponent } from './progress-label.component';

describe('ProgressLabelComponent', () => {
  let component: ProgressLabelComponent;
  let fixture: ComponentFixture<ProgressLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MirostatuspageComponent } from './mirostatuspage.component';

describe('MirostatuspageComponent', () => {
  let component: MirostatuspageComponent;
  let fixture: ComponentFixture<MirostatuspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirostatuspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MirostatuspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

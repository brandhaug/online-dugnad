import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalOrderFormComponent } from './digital-order-form.component';

describe('DigitalOrderFormComponent', () => {
  let component: DigitalOrderFormComponent;
  let fixture: ComponentFixture<DigitalOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

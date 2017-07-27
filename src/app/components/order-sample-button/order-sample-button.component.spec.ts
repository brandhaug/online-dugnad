import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSampleButtonComponent } from './order-sample-button.component';

describe('OrderSampleButtonComponent', () => {
  let component: OrderSampleButtonComponent;
  let fixture: ComponentFixture<OrderSampleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSampleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSampleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

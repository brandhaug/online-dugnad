import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSampleFormComponent } from './order-sample-form.component';

describe('OrderSampleFormComponent', () => {
  let component: OrderSampleFormComponent;
  let fixture: ComponentFixture<OrderSampleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSampleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSampleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

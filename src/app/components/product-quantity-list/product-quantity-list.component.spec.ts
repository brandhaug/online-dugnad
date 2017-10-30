import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuantityListComponent } from './product-quantity-list.component';

describe('ProductQuantityListComponent', () => {
  let component: ProductQuantityListComponent;
  let fixture: ComponentFixture<ProductQuantityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductQuantityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductQuantityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

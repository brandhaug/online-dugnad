import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RussComponent } from './russ.component';

describe('RussComponent', () => {
  let component: RussComponent;
  let fixture: ComponentFixture<RussComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RussComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

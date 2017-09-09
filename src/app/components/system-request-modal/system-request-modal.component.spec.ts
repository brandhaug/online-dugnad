import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemRequestModalComponent } from './system-request-modal.component';

describe('SystemRequestModalComponent', () => {
  let component: SystemRequestModalComponent;
  let fixture: ComponentFixture<SystemRequestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemRequestModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

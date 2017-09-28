import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemRequestComponent } from './system-request.component';

describe('SystemRequestComponent', () => {
  let component: SystemRequestComponent;
  let fixture: ComponentFixture<SystemRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

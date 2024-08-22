import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RioNegroComponent } from './rio-negro.component';

describe('RioNegroComponent', () => {
  let component: RioNegroComponent;
  let fixture: ComponentFixture<RioNegroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RioNegroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RioNegroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

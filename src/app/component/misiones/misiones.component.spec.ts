import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MisionesComponent } from './misiones.component';

describe('MisionesComponent', () => {
  let component: MisionesComponent;
  let fixture: ComponentFixture<MisionesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MisionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

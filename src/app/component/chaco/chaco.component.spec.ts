import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChacoComponent } from './chaco.component';

describe('ChacoComponent', () => {
  let component: ChacoComponent;
  let fixture: ComponentFixture<ChacoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChacoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

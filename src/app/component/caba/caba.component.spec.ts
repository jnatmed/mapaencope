import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabaComponent } from './caba.component';

describe('CabaComponent', () => {
  let component: CabaComponent;
  let fixture: ComponentFixture<CabaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

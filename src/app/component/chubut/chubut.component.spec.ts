import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChubutComponent } from './chubut.component';

describe('ChubutComponent', () => {
  let component: ChubutComponent;
  let fixture: ComponentFixture<ChubutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChubutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChubutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

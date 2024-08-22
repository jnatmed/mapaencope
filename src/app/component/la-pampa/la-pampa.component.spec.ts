import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LaPampaComponent } from './la-pampa.component';

describe('LaPampaComponent', () => {
  let component: LaPampaComponent;
  let fixture: ComponentFixture<LaPampaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LaPampaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaPampaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

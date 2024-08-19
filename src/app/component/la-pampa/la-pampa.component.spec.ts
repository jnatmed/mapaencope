import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaPampaComponent } from './la-pampa.component';

describe('LaPampaComponent', () => {
  let component: LaPampaComponent;
  let fixture: ComponentFixture<LaPampaComponent>;

  beforeEach(async(() => {
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

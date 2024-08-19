import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TierraDelFuegoComponent } from './tierra-del-fuego.component';

describe('TierraDelFuegoComponent', () => {
  let component: TierraDelFuegoComponent;
  let fixture: ComponentFixture<TierraDelFuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TierraDelFuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TierraDelFuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

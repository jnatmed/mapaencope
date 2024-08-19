import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuenosAiresComponent } from './buenos-aires.component';

describe('BuenosAiresComponent', () => {
  let component: BuenosAiresComponent;
  let fixture: ComponentFixture<BuenosAiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuenosAiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuenosAiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

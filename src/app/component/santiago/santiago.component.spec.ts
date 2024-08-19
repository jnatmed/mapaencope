import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantiagoComponent } from './santiago.component';

describe('SantiagoComponent', () => {
  let component: SantiagoComponent;
  let fixture: ComponentFixture<SantiagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantiagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantiagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

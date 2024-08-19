import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormosaComponent } from './formosa.component';

describe('FormosaComponent', () => {
  let component: FormosaComponent;
  let fixture: ComponentFixture<FormosaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormosaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

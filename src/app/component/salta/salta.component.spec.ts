import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SaltaComponent } from './salta.component';

describe('SaltaComponent', () => {
  let component: SaltaComponent;
  let fixture: ComponentFixture<SaltaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SaltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

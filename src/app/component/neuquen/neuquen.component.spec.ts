import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NeuquenComponent } from './neuquen.component';

describe('NeuquenComponent', () => {
  let component: NeuquenComponent;
  let fixture: ComponentFixture<NeuquenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuquenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuquenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

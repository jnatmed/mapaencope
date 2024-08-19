import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuquenComponent } from './neuquen.component';

describe('NeuquenComponent', () => {
  let component: NeuquenComponent;
  let fixture: ComponentFixture<NeuquenComponent>;

  beforeEach(async(() => {
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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaCruzComponent } from './santa-cruz.component';

describe('SantaCruzComponent', () => {
  let component: SantaCruzComponent;
  let fixture: ComponentFixture<SantaCruzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantaCruzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantaCruzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

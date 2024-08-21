import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SantaCruzComponent } from './santa-cruz.component';

describe('SantaCruzComponent', () => {
  let component: SantaCruzComponent;
  let fixture: ComponentFixture<SantaCruzComponent>;

  beforeEach(waitForAsync(() => {
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

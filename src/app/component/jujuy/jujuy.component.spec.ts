import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JujuyComponent } from './jujuy.component';

describe('JujuyComponent', () => {
  let component: JujuyComponent;
  let fixture: ComponentFixture<JujuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JujuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JujuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

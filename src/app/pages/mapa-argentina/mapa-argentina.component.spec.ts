import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MapaArgentinaComponent } from './mapa-argentina.component';

describe('MapaArgentinaComponent', () => {
  let component: MapaArgentinaComponent;
  let fixture: ComponentFixture<MapaArgentinaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaArgentinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaArgentinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

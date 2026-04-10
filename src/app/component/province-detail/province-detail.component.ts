import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MapProvince, MapUnit } from '../../models/map-api.model';

@Component({
  selector: 'app-province-detail',
  templateUrl: './province-detail.component.html',
  styleUrls: ['./province-detail.component.css']
})
export class ProvinceDetailComponent implements OnChanges {
  @Input() province: MapProvince | null = null;
  @Output() modalAdminRequested = new EventEmitter<MapUnit>();

  selectedUnitIndex = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.province) {
      this.selectedUnitIndex = 0;
    }
  }

  get selectedUnit(): MapUnit | null {
    if (!this.province || this.province.units.length === 0) {
      return null;
    }

    return this.province.units[this.selectedUnitIndex] || this.province.units[0];
  }

  selectUnit(index: number): void {
    this.selectedUnitIndex = index;
  }

  openAdminModal(unit: MapUnit): void {
    this.modalAdminRequested.emit(unit);
  }

  trackByUnitId(_index: number, unit: MapUnit): number {
    return unit.id;
  }

  totalWorkers(unit: MapUnit | null): number {
    if (!unit) {
      return 0;
    }

    return unit.workshops.reduce((total, workshop) => total + workshop.workersCount, 0);
  }
}

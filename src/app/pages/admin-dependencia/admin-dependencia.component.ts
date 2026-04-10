import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MapProvince, MapUnit } from '../../models/map-api.model';
import { MapApiService } from '../../services/map-api.service';

@Component({
  selector: 'app-admin-dependencia',
  templateUrl: './admin-dependencia.component.html',
  styleUrls: ['./admin-dependencia.component.css']
})
export class AdminDependenciaComponent implements OnInit, OnChanges {
  @Input() provinceSlug: string | null = null;
  @Input() unitId: number | null = null;
  @Input() modalMode = false;
  @Output() closed = new EventEmitter<void>();
  @Output() provinceUpdated = new EventEmitter<MapProvince>();

  province: MapProvince | null = null;
  selectedUnitId: number | null = null;
  loading = false;
  saving = false;
  message = '';
  errorMessage = '';

  unitForm = {
    name: '',
    code: '',
    abbreviation: '',
    detailText: '',
  };

  newWorkshop = {
    name: '',
    workersCount: 0,
  };

  editingWorkshopId: number | null = null;
  workshopDrafts: Record<number, { name: string; workersCount: number }> = {};

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly mapApiService: MapApiService
  ) {}

  ngOnInit(): void {
    if (this.modalMode && this.provinceSlug) {
      this.selectedUnitId = this.unitId;
      this.loadProvince(this.provinceSlug);
      return;
    }

    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      const unitId = Number(params.get('unitId'));

      if (!slug) {
        return;
      }

      this.selectedUnitId = Number.isFinite(unitId) ? unitId : null;
      this.loadProvince(slug);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.modalMode) {
      return;
    }

    if ((changes.provinceSlug || changes.unitId) && this.provinceSlug) {
      this.selectedUnitId = this.unitId;
      this.loadProvince(this.provinceSlug);
    }
  }

  get selectedUnit(): MapUnit | null {
    if (!this.province || this.province.units.length === 0) {
      return null;
    }

    if (this.selectedUnitId) {
      return this.province.units.find((unit) => unit.id === this.selectedUnitId) || this.province.units[0];
    }

    return this.province.units[0];
  }

  loadProvince(slug: string): void {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';

    this.mapApiService.getProvince(slug).subscribe({
      next: (province) => {
        this.province = province;
        this.selectedUnitId = this.selectedUnit?.id || null;
        this.syncUnitForm();
        this.resetWorkshopDrafts();
        this.loading = false;
        this.provinceUpdated.emit(province);
      },
      error: () => {
        this.errorMessage = 'No se pudo cargar la dependencia para administrar.';
        this.loading = false;
      }
    });
  }

  onUnitChange(unitId: string): void {
    this.selectedUnitId = Number(unitId);
    this.syncUnitForm();
    this.resetWorkshopDrafts();
    this.message = '';
    this.errorMessage = '';
  }

  syncUnitForm(): void {
    const unit = this.selectedUnit;
    this.unitForm = {
      name: unit?.name || '',
      code: unit?.code || '',
      abbreviation: unit?.abbreviation || '',
      detailText: unit?.detailText || '',
    };
  }

  resetWorkshopDrafts(): void {
    this.editingWorkshopId = null;
    this.workshopDrafts = {};

    if (!this.selectedUnit) {
      return;
    }

    for (const workshop of this.selectedUnit.workshops) {
      this.workshopDrafts[workshop.id] = {
        name: workshop.name,
        workersCount: workshop.workersCount,
      };
    }
  }

  saveUnit(): void {
    const unit = this.selectedUnit;
    if (!unit) {
      return;
    }

    this.saving = true;
    this.message = '';
    this.errorMessage = '';

    this.mapApiService.updateUnit(unit.id, this.unitForm).subscribe({
      next: () => {
        this.message = 'Dependencia actualizada.';
        this.reloadCurrentProvince();
      },
      error: () => {
        this.saving = false;
        this.errorMessage = 'No se pudo guardar la dependencia.';
      }
    });
  }

  createWorkshop(): void {
    const unit = this.selectedUnit;
    if (!unit) {
      return;
    }

    this.saving = true;
    this.message = '';
    this.errorMessage = '';

    this.mapApiService.createWorkshop(unit.id, this.newWorkshop).subscribe({
      next: () => {
        this.newWorkshop = { name: '', workersCount: 0 };
        this.message = 'Taller agregado.';
        this.reloadCurrentProvince();
      },
      error: () => {
        this.saving = false;
        this.errorMessage = 'No se pudo crear el taller.';
      }
    });
  }

  editWorkshop(workshopId: number): void {
    this.editingWorkshopId = workshopId;
  }

  cancelWorkshopEdit(): void {
    this.editingWorkshopId = null;
    this.resetWorkshopDrafts();
  }

  saveWorkshop(workshopId: number): void {
    const draft = this.workshopDrafts[workshopId];
    if (!draft) {
      return;
    }

    this.saving = true;
    this.message = '';
    this.errorMessage = '';

    this.mapApiService.updateWorkshop(workshopId, draft).subscribe({
      next: () => {
        this.editingWorkshopId = null;
        this.message = 'Taller actualizado.';
        this.reloadCurrentProvince();
      },
      error: () => {
        this.saving = false;
        this.errorMessage = 'No se pudo actualizar el taller.';
      }
    });
  }

  deleteWorkshop(workshopId: number): void {
    this.saving = true;
    this.message = '';
    this.errorMessage = '';

    this.mapApiService.deleteWorkshop(workshopId).subscribe({
      next: () => {
        this.message = 'Taller eliminado.';
        this.reloadCurrentProvince();
      },
      error: () => {
        this.saving = false;
        this.errorMessage = 'No se pudo eliminar el taller.';
      }
    });
  }

  close(): void {
    if (this.modalMode) {
      this.closed.emit();
      return;
    }

    this.router.navigate(['/mapa']);
  }

  private reloadCurrentProvince(): void {
    if (!this.province) {
      this.saving = false;
      return;
    }

    const currentSlug = this.province.slug;
    const currentUnitId = this.selectedUnitId;

    this.mapApiService.getProvince(currentSlug).subscribe({
      next: (province) => {
        this.province = province;
        this.selectedUnitId = currentUnitId && province.units.some((unit) => unit.id === currentUnitId)
          ? currentUnitId
          : province.units[0]?.id || null;
        this.syncUnitForm();
        this.resetWorkshopDrafts();
        this.saving = false;
        this.provinceUpdated.emit(province);
      },
      error: () => {
        this.saving = false;
        this.errorMessage = 'Los cambios se guardaron, pero no se pudo refrescar la vista.';
      }
    });
  }
}

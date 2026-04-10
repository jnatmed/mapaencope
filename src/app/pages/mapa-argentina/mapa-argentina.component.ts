import { Component, OnInit } from '@angular/core';
import { MapaArgentinaSVG, MapaObjeto } from '../../class/mapaArgentina.model';
import { MapProvince, MapUnit } from '../../models/map-api.model';
import { MapApiService } from '../../services/map-api.service';

declare var $: any;

const fillSINTALLERES = '#5DC1B9';
const fillCONTALLERES = '#4d646b';

@Component({
  selector: 'app-mapa-argentina',
  templateUrl: './mapa-argentina.component.html',
  styleUrls: ['./mapa-argentina.component.css']
})
export class MapaArgentinaComponent implements OnInit {
  elementos: MapaArgentinaSVG;
  provincias: MapaObjeto[] = [];
  provinciasData: MapProvince[] = [];
  selectedProvince: MapProvince | null = null;
  modalAdminProvinceSlug: string | null = null;
  modalAdminUnitId: number | null = null;
  loading = false;
  errorMessage = '';

  zoomLevel = 1;
  panX = 0;
  panY = 0;

  private dragging = false;
  private dragStartX = 0;
  private dragStartY = 0;
  private startPanX = 0;
  private startPanY = 0;

  constructor(private readonly mapApiService: MapApiService) {
    this.elementos = new MapaArgentinaSVG();
    this.provincias = this.getMapa();
  }

  ngOnInit(): void {
    this.loadProvinces();
  }

  get mapTransform(): string {
    return `translate(${this.panX}px, ${this.panY}px) scale(${this.zoomLevel})`;
  }

  loadProvinces(): void {
    this.loading = true;
    this.errorMessage = '';

    this.mapApiService.getProvinces().subscribe({
      next: (provinces) => {
        const provinceBySlug = new Map(provinces.map((province) => [province.slug, province]));

        this.provinciasData = provinces;
        this.provincias = this.provincias.map((province) => {
          const provinceData = provinceBySlug.get(province.slug);
          return {
            ...province,
            nombreProvincia: provinceData?.name || province.nombreProvincia,
            hasDetail: provinceData?.hasDetail ?? province.hasDetail,
            fill: provinceData?.fillColor || province.fill,
          };
        });

        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'No se pudo cargar la información del mapa.';
      }
    });
  }

  getMapa(): MapaObjeto[] {
    return [
      { provincia_id: '23', slug: 'tierra-del-fuego', nombreProvincia: 'Tierra del fuego', provinciaPath: this.elementos.tierradelfuego, hasDetail: false, fill: fillSINTALLERES },
      { provincia_id: '20', slug: 'santa-cruz', nombreProvincia: 'Santa Cruz', provinciaPath: this.elementos.santacruz, hasDetail: true, fill: fillCONTALLERES },
      { provincia_id: '5', slug: 'chubut', nombreProvincia: 'Chubut', provinciaPath: this.elementos.chubut, hasDetail: true, fill: fillCONTALLERES },
      { provincia_id: '19', slug: 'san-luis', nombreProvincia: 'San Luis', provinciaPath: this.elementos.sanluis, hasDetail: false, fill: fillSINTALLERES },
      { provincia_id: '15', slug: 'neuquen', nombreProvincia: 'Neuquen', provinciaPath: this.elementos.neuquen, hasDetail: true, fill: fillCONTALLERES },
      { provincia_id: '16', slug: 'rio-negro', nombreProvincia: 'Rio Negro', provinciaPath: this.elementos.rionegro, hasDetail: true, fill: fillCONTALLERES },
      { provincia_id: '11', slug: 'la-pampa', nombreProvincia: 'La Pampa', provinciaPath: this.elementos.lapampa, hasDetail: true, fill: fillCONTALLERES },
      { provincia_id: '13', slug: 'mendoza', nombreProvincia: 'Mendoza', provinciaPath: this.elementos.mendoza, hasDetail: true, fill: fillCONTALLERES },
      { provincia_id: '18', slug: 'san-juan', nombreProvincia: 'San Juan', provinciaPath: this.elementos.sanjuan, hasDetail: false, fill: fillSINTALLERES },
      { provincia_id: '2', slug: 'buenos-aires', nombreProvincia: 'Buenos Aires', provinciaPath: this.elementos.bsas, hasDetail: true, fill: fillCONTALLERES },
      { provincia_id: '12', slug: 'la-rioja', nombreProvincia: 'La Rioja', provinciaPath: this.elementos.larioja, hasDetail: false, fill: fillSINTALLERES },
      { provincia_id: '3', slug: 'catamarca', nombreProvincia: 'Catamarca', provinciaPath: this.elementos.catamarca, hasDetail: false, fill: fillSINTALLERES },
      { provincia_id: '24', slug: 'tucuman', nombreProvincia: 'Tucumán', provinciaPath: this.elementos.tucuman, hasDetail: false, fill: fillSINTALLERES },
      { provincia_id: '22', slug: 'santiago-del-estero', nombreProvincia: 'Santiago del Estero', provinciaPath: this.elementos.santiago, hasDetail: true, fill: fillCONTALLERES },
      { provincia_id: '17', slug: 'salta', nombreProvincia: 'Salta', provinciaPath: this.elementos.salta, hasDetail: true, fill: fillCONTALLERES },
      { provincia_id: '10', slug: 'jujuy', nombreProvincia: 'Jujuy', provinciaPath: this.elementos.jujuy, hasDetail: true, fill: fillCONTALLERES },
      { provincia_id: '9', slug: 'formosa', nombreProvincia: 'Formosa', provinciaPath: this.elementos.formosa, hasDetail: true, fill: fillCONTALLERES },
      { provincia_id: '8', slug: 'entre-rios', nombreProvincia: 'Entre Ríos', provinciaPath: this.elementos.entrerios, hasDetail: false, fill: fillSINTALLERES },
      { provincia_id: '4', slug: 'chaco', nombreProvincia: 'Chaco', provinciaPath: this.elementos.chaco, hasDetail: true, fill: fillCONTALLERES },
      { provincia_id: '7', slug: 'corrientes', nombreProvincia: 'Corrientes', provinciaPath: this.elementos.corrientes, hasDetail: false, fill: fillSINTALLERES },
      { provincia_id: '14', slug: 'misiones', nombreProvincia: 'Misiones', provinciaPath: this.elementos.misiones, hasDetail: true, fill: fillCONTALLERES },
      { provincia_id: '6', slug: 'cordoba', nombreProvincia: 'Córdoba', provinciaPath: this.elementos.cordoba, hasDetail: false, fill: fillSINTALLERES },
      { provincia_id: '21', slug: 'santa-fe', nombreProvincia: 'Santa Fe', provinciaPath: this.elementos.santafe, hasDetail: false, fill: fillSINTALLERES },
      { provincia_id: '1', slug: 'ciudad-autonoma-de-buenos-aires', nombreProvincia: 'Ciudad Autónoma de Buenos Aires', provinciaPath: this.elementos.CABA, hasDetail: true, fill: fillCONTALLERES },
      { provincia_id: '25', slug: 'isla-gran-malvinas', nombreProvincia: 'Isla Gran Malvinas', provinciaPath: this.elementos.granMalvinas, hasDetail: false, fill: fillSINTALLERES },
      { provincia_id: '26', slug: 'isla-soledad', nombreProvincia: 'Isla Soledad', provinciaPath: this.elementos.soledad, hasDetail: false, fill: fillSINTALLERES }
    ];
  }

  click(province: MapaObjeto): void {
    if (!province.hasDetail) {
      this.selectedProvince = null;
      return;
    }

    this.selectedProvince = this.provinciasData.find((item) => item.slug === province.slug) || null;
  }

  openAdminModal(unit: MapUnit): void {
    if (!this.selectedProvince) {
      return;
    }

    this.modalAdminProvinceSlug = this.selectedProvince.slug;
    this.modalAdminUnitId = unit.id;
  }

  closeAdminModal(): void {
    this.modalAdminProvinceSlug = null;
    this.modalAdminUnitId = null;
  }

  handleProvinceUpdated(province: MapProvince): void {
    this.provinciasData = this.provinciasData.map((item) => item.id === province.id ? province : item);

    if (this.selectedProvince?.id === province.id) {
      this.selectedProvince = province;
    }
  }

  hover(index: number): void {
    $("path[data-index='" + index + "']").css('fill', '#1c90ce');
    $("path[data-index='" + index + "']").css('cursor', 'pointer');
  }

  out(index: number, fill: string): void {
    $("path[data-index='" + index + "']").css('fill', fill);
  }

  zoomIn(): void {
    this.setZoom(this.zoomLevel + 0.2);
  }

  zoomOut(): void {
    this.setZoom(this.zoomLevel - 0.2);
  }

  resetZoom(): void {
    this.zoomLevel = 1;
    this.panX = 0;
    this.panY = 0;
    this.dragging = false;
  }

  onWheel(event: WheelEvent): void {
    event.preventDefault();
    const delta = event.deltaY < 0 ? 0.15 : -0.15;
    this.setZoom(this.zoomLevel + delta);
  }

  startPan(event: MouseEvent): void {
    this.dragging = true;
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
    this.startPanX = this.panX;
    this.startPanY = this.panY;
  }

  onPan(event: MouseEvent): void {
    if (!this.dragging) {
      return;
    }

    this.panX = this.startPanX + (event.clientX - this.dragStartX);
    this.panY = this.startPanY + (event.clientY - this.dragStartY);
  }

  stopPan(): void {
    this.dragging = false;
  }

  trackByUnitId(_index: number, unit: MapUnit): number {
    return unit.id;
  }

  private setZoom(value: number): void {
    this.zoomLevel = Math.min(3.5, Math.max(0.8, Number(value.toFixed(2))));
  }
}

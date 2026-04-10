import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MapProvince, MapUnit, MapWorkshop } from '../models/map-api.model';

@Injectable({
  providedIn: 'root'
})
export class MapApiService {
  private readonly baseUrl = `${environment.apiBaseUrl}/map`;

  constructor(private readonly http: HttpClient) {}

  getProvinces(): Observable<MapProvince[]> {
    return this.http.get<MapProvince[]>(`${this.baseUrl}/provinces`);
  }

  getProvince(slug: string): Observable<MapProvince> {
    return this.http.get<MapProvince>(`${environment.apiBaseUrl}/admin/provinces/${slug}`);
  }

  updateUnit(
    unitId: number,
    payload: Partial<Pick<MapUnit, 'name' | 'code' | 'abbreviation' | 'description' | 'detailText'>>
  ): Observable<{ ok: boolean; unit: MapUnit }> {
    return this.http.put<{ ok: boolean; unit: MapUnit }>(
      `${environment.apiBaseUrl}/admin/units/${unitId}`,
      payload
    );
  }

  createWorkshop(
    unitId: number,
    payload: Pick<MapWorkshop, 'name' | 'workersCount'>
  ): Observable<{ ok: boolean; workshop: MapWorkshop }> {
    return this.http.post<{ ok: boolean; workshop: MapWorkshop }>(
      `${environment.apiBaseUrl}/admin/units/${unitId}/workshops`,
      payload
    );
  }

  updateWorkshop(
    workshopId: number,
    payload: Pick<MapWorkshop, 'name' | 'workersCount'>
  ): Observable<{ ok: boolean; workshop: MapWorkshop }> {
    return this.http.put<{ ok: boolean; workshop: MapWorkshop }>(
      `${environment.apiBaseUrl}/admin/workshops/${workshopId}`,
      payload
    );
  }

  deleteWorkshop(workshopId: number): Observable<{ ok: boolean }> {
    return this.http.delete<{ ok: boolean }>(`${environment.apiBaseUrl}/admin/workshops/${workshopId}`);
  }
}

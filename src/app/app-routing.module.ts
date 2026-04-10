import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MapaArgentinaComponent } from './pages/mapa-argentina/mapa-argentina.component';
import { AdminDependenciaComponent } from './pages/admin-dependencia/admin-dependencia.component';

const routes: Routes = [
  { path: 'mapa', component: MapaArgentinaComponent },
  { path: 'admin/:slug/:unitId', component: AdminDependenciaComponent },
  { path: '', redirectTo: '/mapa', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

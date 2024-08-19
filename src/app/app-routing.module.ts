import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MapaArgentinaComponent } from './pages/mapa-argentina/mapa-argentina.component';

const routes: Routes = [
  { path: 'mapa', component: MapaArgentinaComponent },
  { path: '', redirectTo: '/mapa', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit, TemplateRef } from '@angular/core';

// Define la interfaz para los datos del taller
interface Taller {
  nombre_de_taller: string;
  cantidad_de_internos_trabajadores: number;
}

@Component({
  selector: 'app-santa-cruz',
  templateUrl: './santa-cruz.component.html',
  styleUrls: ['./santa-cruz.component.css']
})
export class SantaCruzComponent implements OnInit {

  templateSelected: TemplateRef<any>;
  tallersantacruzu15: Taller[] = []; // Array para almacenar los datos de los talleres de santa cruz u15
  totalInternossantacruzu15: number; // Variable para almacenar el total de internos trabajadores de santa cruz u15

  constructor() { }

  ngOnInit(): void {
    // Simula la carga de datos
    this.tallersantacruzu15 = [
      { nombre_de_taller: 'Transporte', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Sastrería', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 23 },
      { nombre_de_taller: 'Lavadero de Ropa', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Huerta', cantidad_de_internos_trabajadores: 13 },
      { nombre_de_taller: 'Higiene de Alojamientos', cantidad_de_internos_trabajadores: 15 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Cocina Central', cantidad_de_internos_trabajadores: 14 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Bloquería', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 11 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternossantacruzu15 = this.tallersantacruzu15.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);
  }
}

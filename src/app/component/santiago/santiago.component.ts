import { Component, OnInit, TemplateRef } from '@angular/core';

// Define la interfaz para los datos del taller
interface Taller {
  nombre_de_taller: string;
  cantidad_de_internos_trabajadores: number;
}

@Component({
  selector: 'app-santiago',
  templateUrl: './santiago.component.html',
  styleUrls: ['./santiago.component.css']
})
export class SantiagoComponent implements OnInit {

  templateSelected: TemplateRef<any>;
  talleressantiagou35: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternossantiagou35: number; // Variable para almacenar el total de internos trabajadores

  constructor() { }

  ngOnInit(): void {
    // Simula la carga de datos
    this.talleressantiagou35 = [
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 9 },
      // { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 32 },
      { nombre_de_taller: 'Mantenimiento', cantidad_de_internos_trabajadores: 52 + 9 +32+41},
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Huerta', cantidad_de_internos_trabajadores: 6 },
      // { nombre_de_taller: 'Higiene de Alojamiento', cantidad_de_internos_trabajadores: 41 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 6 },
      // { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 9 },
      { nombre_de_taller: 'Artículos de Limpieza', cantidad_de_internos_trabajadores: 1 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternossantiagou35 = this.talleressantiagou35.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);
  }
}

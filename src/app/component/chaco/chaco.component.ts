import { Component, OnInit, TemplateRef } from '@angular/core';

// Define la interfaz para los datos del taller
interface Taller {
  nombre_de_taller: string;
  cantidad_de_internos_trabajadores: number;
}

@Component({
  selector: 'app-chaco',
  templateUrl: './chaco.component.html',
  styleUrls: ['./chaco.component.css']
})
export class ChacoComponent implements OnInit {

  templateSelected: TemplateRef<any>;
  tallereschacou7: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternoschacou7: number; // Variable para almacenar el total de internos trabajadores

  tallereschacou11: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternoschacou11: number; // Variable para almacenar el total de internos trabajadores


  constructor() { }

  ngOnInit(): void {
    // Simula la carga de datos
    this.tallereschacou7 = [
      { nombre_de_taller: 'Talabartería', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Sastrería', cantidad_de_internos_trabajadores: 8 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 13 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 8 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 20 + 74 },
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 6 },
      { nombre_de_taller: 'Horticultura', cantidad_de_internos_trabajadores: 40 },
      { nombre_de_taller: 'Higiene de Alojamiento', cantidad_de_internos_trabajadores: 151 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 11 },
      { nombre_de_taller: 'Cocina Central', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Carpintería Metálica', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 10 },
      { nombre_de_taller: 'Bloquería', cantidad_de_internos_trabajadores: 9 },
      { nombre_de_taller: 'Automotores', cantidad_de_internos_trabajadores: 7 },
      // { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 74 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternoschacou7 = this.tallereschacou7.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);

    this.tallereschacou11 = [
      { nombre_de_taller: 'Porcicultura', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 14 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 22 + 41 },
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Horticultura', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Higiene de Alojamiento', cantidad_de_internos_trabajadores: 35 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 9 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 6 },
      { nombre_de_taller: 'Bloquería', cantidad_de_internos_trabajadores: 6 },
      // { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 41 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternoschacou11 = this.tallereschacou11.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);    
  }
}

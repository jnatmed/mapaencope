import { Component, OnInit, TemplateRef } from '@angular/core';

// Define la interfaz para los datos del taller
interface Taller {
  nombre_de_taller: string;
  cantidad_de_internos_trabajadores: number;
}

@Component({
  selector: 'app-misiones',
  templateUrl: './misiones.component.html',
  styleUrls: ['./misiones.component.css']
})
export class MisionesComponent implements OnInit {

  templateSelected: TemplateRef<any>;
  talleresmisionesu17: Taller[] = []; // Array para almacenar los datos de los talleres de misiones u17
  totalInternosmisionesu17: number; // Variable para almacenar el total de internos trabajadores de misiones u17

  constructor() { }

  ngOnInit(): void {
    // Simula la carga de datos
    this.talleresmisionesu17 = [
      { nombre_de_taller: 'Yerbal', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Porcicultura', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 8 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 24 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 46 +22},
      { nombre_de_taller: 'Horticultura', cantidad_de_internos_trabajadores: 14 },
      { nombre_de_taller: 'Higiene de Alojamientos', cantidad_de_internos_trabajadores: 28 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Costura', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Compostaje', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Cocina Central', cantidad_de_internos_trabajadores: 13 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 8 },
      { nombre_de_taller: 'Bloquería', cantidad_de_internos_trabajadores: 2 },
      // { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 22 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternosmisionesu17 = this.talleresmisionesu17.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);
  }
}

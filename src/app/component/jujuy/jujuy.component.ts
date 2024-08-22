import { Component, OnInit, TemplateRef } from '@angular/core';

// Define la interfaz para los datos del taller
interface Taller {
  nombre_de_taller: string;
  cantidad_de_internos_trabajadores: number;
}

@Component({
  selector: 'app-jujuy',
  templateUrl: './jujuy.component.html',
  styleUrls: ['./jujuy.component.css']
})
export class JujuyComponent implements OnInit {

  templateSelected: TemplateRef<any>;
  talleresjujuyu8: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternosjujuyu8: number; // Variable para almacenar el total de internos trabajadores

  talleresjujuyu22: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternosjujuyu22: number; // Variable para almacenar el total de internos trabajadores

  constructor() { }

  ngOnInit(): void {
    // Simula la carga de datos
    this.talleresjujuyu8 = [
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 18 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 64 },
      { nombre_de_taller: 'Horticultura', cantidad_de_internos_trabajadores: 27 },
      { nombre_de_taller: 'Higiene de Alojamiento', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Bloquería', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Artesanías Regionales', cantidad_de_internos_trabajadores: 2 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternosjujuyu8 = this.talleresjujuyu8.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);

    // Simula la carga de datos
    this.talleresjujuyu22 = [
      { nombre_de_taller: 'Repostería', cantidad_de_internos_trabajadores: 6 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 12 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 9 + 7},
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 6 },
      { nombre_de_taller: 'Higiene de Alojamiento', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 6 },
      { nombre_de_taller: 'Costura', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 6 },
      // { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Artesanías', cantidad_de_internos_trabajadores: 5 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternosjujuyu22 = this.talleresjujuyu22.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);
  }
}

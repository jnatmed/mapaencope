import { Component, OnInit, TemplateRef } from '@angular/core';

// Define la interfaz para los datos del taller
interface Taller {
  nombre_de_taller: string;
  cantidad_de_internos_trabajadores: number;
}

@Component({
  selector: 'app-la-pampa',
  templateUrl: './la-pampa.component.html',
  styleUrls: ['./la-pampa.component.css']
})
export class LaPampaComponent implements OnInit {

  templateSelected: TemplateRef<any>;
  tallereslapampau4: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternoslapampau4: number; // Variable para almacenar el total de internos trabajadores

  tallereslapampau13: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternoslapampau13: number; // Variable para almacenar el total de internos trabajadores

  tallereslapampau25: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternoslapampau25: number; // Variable para almacenar el total de internos trabajadores

  tallereslapampau30: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternoslapampau30: number; // Variable para almacenar el total de internos trabajadores

  constructor() { }

  ngOnInit(): void {
    // Simula la carga de datos
    this.tallereslapampau4 = [
      { nombre_de_taller: 'Vivero', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Tambo', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Sastrería', cantidad_de_internos_trabajadores: 19 },
      { nombre_de_taller: 'Quesería', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Porcicultura', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 14 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 43 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 26 },
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Horticultura', cantidad_de_internos_trabajadores: 27 },
      { nombre_de_taller: 'Higiene de Alojamiento', cantidad_de_internos_trabajadores: 197 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 19 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 16 },
      { nombre_de_taller: 'Biodigestor', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Avicultura', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Automotores', cantidad_de_internos_trabajadores: 6 },
      { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 76 },
      { nombre_de_taller: 'Agricultura', cantidad_de_internos_trabajadores: 1 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternoslapampau4 = this.tallereslapampau4.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);

    this.tallereslapampau13 = [
      { nombre_de_taller: 'Tejido', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Repostería', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Muñequera', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Manualidades', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Lavadero de Ropa', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Horticultura', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Costura', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Cocina Central', cantidad_de_internos_trabajadores: 6 },
      { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 5 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternoslapampau13 = this.tallereslapampau13.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);    

    this.tallereslapampau25 = [
      { nombre_de_taller: 'Porcicultura', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 2 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternoslapampau25 = this.tallereslapampau25.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);    

    this.tallereslapampau30 = [
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Horticultura', cantidad_de_internos_trabajadores: 8 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 1 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternoslapampau30 = this.tallereslapampau30.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);
        
  }
}

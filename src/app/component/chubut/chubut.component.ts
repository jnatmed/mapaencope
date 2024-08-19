import { Component, OnInit, TemplateRef } from '@angular/core';

// Define la interfaz para los datos del taller
interface Taller {
  nombre_de_taller: string;
  cantidad_de_internos_trabajadores: number;
}

@Component({
  selector: 'app-chubut',
  templateUrl: './chubut.component.html',
  styleUrls: ['./chubut.component.css']
})
export class ChubutComponent implements OnInit {

  templateSelected: TemplateRef<any>;
  tallereschubutu6: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternoschubutu6: number; // Variable para almacenar el total de internos trabajadores

  tallereschubutu14: Taller[] = []; // Array para almacenar los datos de los talleres de chubutu14
  totalInternoschubutu14: number; // Variable para almacenar el total de internos trabajadores de chubutu14


  constructor() { }

  ngOnInit(): void {
    // Simula la carga de datos
    this.tallereschubutu6 = [
      { nombre_de_taller: 'Tapicería', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Sastrería', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Reciclado de Papeles', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Planta Almazara', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 9 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 22 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 47 },
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Imprenta', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Horticultura', cantidad_de_internos_trabajadores: 16 },
      { nombre_de_taller: 'Higiene de Alojamientos', cantidad_de_internos_trabajadores: 155 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 8 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 10 },
      { nombre_de_taller: 'Bloquería', cantidad_de_internos_trabajadores: 14 },
      { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 41 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternoschubutu6 = this.tallereschubutu6.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);

    this.tallereschubutu14 = [
      { nombre_de_taller: 'Sastrería', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 14 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 28 },
      { nombre_de_taller: 'Huerta', cantidad_de_internos_trabajadores: 11 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 8 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Bloquería', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 17 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternoschubutu14 = this.tallereschubutu14.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);    
  }
}

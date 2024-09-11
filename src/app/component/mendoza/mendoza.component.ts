import { Component, OnInit, TemplateRef } from '@angular/core';

// Define la interfaz para los datos del taller
interface Taller {
  nombre_de_taller: string;
  cantidad_de_internos_trabajadores: number;
}

@Component({
  selector: 'app-mendoza',
  templateUrl: './mendoza.component.html',
  styleUrls: ['./mendoza.component.css']
})
export class MendozaComponent implements OnInit {

  templateSelected: TemplateRef<any>;
  talleresmendozacpfvi: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternosmendozacpfvi: number; // Variable para almacenar el total de internos trabajadores

  constructor() { }

  ngOnInit(): void {
    // Simula la carga de datos
    this.talleresmendozacpfvi = [
      { nombre_de_taller: 'Tejido', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Sastrería', cantidad_de_internos_trabajadores: 25 },
      { nombre_de_taller: 'Reciclado', cantidad_de_internos_trabajadores: 45 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 37 },
      { nombre_de_taller: 'Mantenimiento', cantidad_de_internos_trabajadores: 76 + 9},
      { nombre_de_taller: 'Horticultura', cantidad_de_internos_trabajadores: 52 },
      { nombre_de_taller: 'Higiene de Alojamientos', cantidad_de_internos_trabajadores: 194 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 27 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 24 },
      { nombre_de_taller: 'Automotores', cantidad_de_internos_trabajadores: 2 },
      // { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 9 },
      { nombre_de_taller: 'Agricultura', cantidad_de_internos_trabajadores: 7 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternosmendozacpfvi = this.talleresmendozacpfvi.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);
  }
}

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

  imagesU17 = [
    { src: './assets/img/u17.png', alt: 'U17' },
    { src: './assets/img/u17-1.jpeg', alt: 'U17' },
    { src: './assets/img/u17-2.jpeg', alt: 'U17' },
    { src: './assets/img/u17-3.jpeg', alt: 'U17' },
    { src: './assets/img/u17-4.jpeg', alt: 'U17' },
    { src: './assets/img/u17-5.jpeg', alt: 'U17' },
    { src: './assets/img/u17-6.jpeg', alt: 'U17' },
    { src: './assets/img/u17-7.jpeg', alt: 'U17' },
    // { src: './assets/img/u17-8.jpeg', alt: 'U17' },
    { src: './assets/img/u17-9.jpeg', alt: 'U17' },
    { src: './assets/img/u17-10.jpeg', alt: 'U17' },
    { src: './assets/img/u17-11.jpeg', alt: 'U17' },
  ];

  constructor() { }

  ngOnInit(): void {
    // Simula la carga de datos
    this.talleresmisionesu17 = [
      { nombre_de_taller: 'Yerbal', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Porcicultura', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 8 },
      // { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 24 },
      { nombre_de_taller: 'Mantenimiento', cantidad_de_internos_trabajadores: 46 +22+24+28},
      { nombre_de_taller: 'Horticultura', cantidad_de_internos_trabajadores: 14 },
      // { nombre_de_taller: 'Higiene de Alojamientos', cantidad_de_internos_trabajadores: 28 },
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

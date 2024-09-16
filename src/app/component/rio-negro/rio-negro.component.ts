import { Component, OnInit, TemplateRef } from '@angular/core';

// Define la interfaz para los datos del taller
interface Taller {
  nombre_de_taller: string;
  cantidad_de_internos_trabajadores: number;
}

@Component({
  selector: 'app-rio-negro',
  templateUrl: './rio-negro.component.html',
  styleUrls: ['./rio-negro.component.css']
})
export class RioNegroComponent implements OnInit {

  templateSelected: TemplateRef<any>;
  talleresrionegrou5: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternosrionegrou5: number; // Variable para almacenar el total de internos trabajadores

  talleresrionegrou12: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternosrionegrou12: number; // Variable para almacenar el total de internos trabajadores

  imagesU5 = [
    { src: './assets/img/u5.png', alt: 'U5' },
    { src: './assets/img/u5-1.jpeg', alt: 'U5' },
    { src: './assets/img/u5-2.jpeg', alt: 'U5' },
    { src: './assets/img/u5-3.jpeg', alt: 'U5' },
    { src: './assets/img/u5-4.jpeg', alt: 'U5' },
    { src: './assets/img/u5-5.jpeg', alt: 'U5' },
    { src: './assets/img/u5-6.jpeg', alt: 'U5' },
  ];    

  imagesU12 = [
    { src: './assets/img/u12.png', alt: 'U12' },
    { src: './assets/img/u12-1.jpg', alt: 'U12' },
    { src: './assets/img/u12-2.jpg', alt: 'U12' },
    { src: './assets/img/u12-3.jpg', alt: 'U12' },
    { src: './assets/img/u12-4.jpg', alt: 'U12' },
    { src: './assets/img/u12-5.jpg', alt: 'U12' },
    { src: './assets/img/u12-6.jpg', alt: 'U12' },
    { src: './assets/img/u12-7.jpg', alt: 'U12' },
    { src: './assets/img/u12-8.jpg', alt: 'U12' },
    { src: './assets/img/u12-9.jpg', alt: 'U12' },
    { src: './assets/img/u12-10.jpg', alt: 'U12' },
    { src: './assets/img/u12-11.jpg', alt: 'U12' },
    { src: './assets/img/u12-12.jpg', alt: 'U12' },
    { src: './assets/img/u12-13.jpg', alt: 'U12' },
  ];

  constructor() { }

  ngOnInit(): void {
    // Simula la carga de datos
    this.talleresrionegrou5 = [
      { nombre_de_taller: 'Vivero', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Sastrería', cantidad_de_internos_trabajadores: 6 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 10 },
      { nombre_de_taller: 'Mosaiquería', cantidad_de_internos_trabajadores: 6 },
      // { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 28 },
      { nombre_de_taller: 'Mantenimiento', cantidad_de_internos_trabajadores: 27 + 19 +28+109},
      { nombre_de_taller: 'Huerta', cantidad_de_internos_trabajadores: 7 },
      // { nombre_de_taller: 'Higiene de Alojamientos', cantidad_de_internos_trabajadores: 109 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 9 },
      { nombre_de_taller: 'Fruticultura', cantidad_de_internos_trabajadores: 6 },
      { nombre_de_taller: 'Elaboración de Dulces y Mermeladas', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 6 },
      { nombre_de_taller: 'Automotores', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Aserradero', cantidad_de_internos_trabajadores: 11 },
      // { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 19 },
      { nombre_de_taller: 'Apicultura', cantidad_de_internos_trabajadores: 1 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternosrionegrou5 = this.talleresrionegrou5.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);

    this.talleresrionegrou12 = [
      { nombre_de_taller: 'Sastrería', cantidad_de_internos_trabajadores: 19 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 22 },
      // { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 8 },
      { nombre_de_taller: 'Mantenimiento', cantidad_de_internos_trabajadores: 33 + 20+8},
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Horticultura', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 14 },
      { nombre_de_taller: 'Chapa y Pintura', cantidad_de_internos_trabajadores: 14 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 15 },
      { nombre_de_taller: 'Cabaña Encope', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Bloquería', cantidad_de_internos_trabajadores: 22 },
      { nombre_de_taller: 'Automotores', cantidad_de_internos_trabajadores: 14 },
      // { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 20 },
      { nombre_de_taller: 'Agricultura - Reservas Forrajeras', cantidad_de_internos_trabajadores: 2 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternosrionegrou12 = this.talleresrionegrou12.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);
  }
}

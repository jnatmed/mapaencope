import { Component, OnInit, TemplateRef } from '@angular/core';

// Define la interfaz para los datos del taller
interface Taller {
  nombre_de_taller: string;
  cantidad_de_internos_trabajadores: number;
}

@Component({
  selector: 'app-salta',
  templateUrl: './salta.component.html',
  styleUrls: ['./salta.component.css']
})
export class SaltaComponent implements OnInit {

  templateSelected: TemplateRef<any>;
  tallersaltau16: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternosaltau16: number; // Variable para almacenar el total de internos trabajadores

  tallersaltanoa: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternossaltanoa: number; // Variable para almacenar el total de internos trabajadores

  imagesCpf3 = [
    { src: './assets/img/cpf3.png', alt: 'cpf3' },
    { src: './assets/img/cpf3-1.jpg', alt: 'cpf3' },
    { src: './assets/img/cpf3-2.jpg', alt: 'cpf3' },
    { src: './assets/img/cpf3-3.jpg', alt: 'cpf3' },
    { src: './assets/img/cpf3-4.jpg', alt: 'cpf3' },
    { src: './assets/img/cpf3-5.jpg', alt: 'cpf3' },
    { src: './assets/img/cpf3-7.jpg', alt: 'cpf3' },
    { src: './assets/img/cpf3-8.jpg', alt: 'cpf3' },
  ];

  imagesU16 = [
    { src: './assets/img/u16.png', alt: 'u16' },
    { src: './assets/img/u16_01.jpg', alt: 'u16' },
    { src: './assets/img/u16_02.jpg', alt: 'u16' },
    { src: './assets/img/u16_03.jpg', alt: 'u16' },
    { src: './assets/img/u16_04.jpg', alt: 'u16' },
    { src: './assets/img/u16_05.jpg', alt: 'u16' },
    { src: './assets/img/u16_06.jpg', alt: 'u16' },
    { src: './assets/img/u16_07.jpg', alt: 'u16' },
    { src: './assets/img/u16_08.jpg', alt: 'u16' },
    { src: './assets/img/u16_09.jpg', alt: 'u16' },
    { src: './assets/img/u16_10.jpg', alt: 'u16' },
    { src: './assets/img/u16_11.jpg', alt: 'u16' },
    { src: './assets/img/u16_12.jpg', alt: 'u16' },
    { src: './assets/img/u16_13.jpg', alt: 'u16' },
  ];

  constructor() { }

  ngOnInit(): void {
    // Simula la carga de datos
    this.tallersaltau16 = [
      { nombre_de_taller: 'Talabartería', cantidad_de_internos_trabajadores: 6 },
      // { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Mantenimiento', cantidad_de_internos_trabajadores: 24 + 7+5+20},
      { nombre_de_taller: 'Huerta', cantidad_de_internos_trabajadores: 20 },
      // { nombre_de_taller: 'Higiene de Alojamiento', cantidad_de_internos_trabajadores: 20 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Cocina Central', cantidad_de_internos_trabajadores: 14 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 8 },
      { nombre_de_taller: 'Bloquería', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Automotores', cantidad_de_internos_trabajadores: 2 },
      // { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Artículos de Limpieza', cantidad_de_internos_trabajadores: 3 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternosaltau16 = this.tallersaltau16.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);

    this.tallersaltanoa = [
      { nombre_de_taller: 'Tejido', cantidad_de_internos_trabajadores: 14 },
      { nombre_de_taller: 'Sastrería', cantidad_de_internos_trabajadores: 14 },
      { nombre_de_taller: 'Repostería', cantidad_de_internos_trabajadores: 6 },
      { nombre_de_taller: 'Peluquería', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 2 },
      // { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 39 },
      { nombre_de_taller: 'Marroquinería y Talabartería', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Mantenimiento', cantidad_de_internos_trabajadores: 54 + 17+39+237},
      { nombre_de_taller: 'Lavadero de Ropa', cantidad_de_internos_trabajadores: 10 },
      // { nombre_de_taller: 'Higiene de Alojamiento', cantidad_de_internos_trabajadores: 237 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 22 },
      { nombre_de_taller: 'Costura', cantidad_de_internos_trabajadores: 11 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 21 },
      { nombre_de_taller: 'Bloquería', cantidad_de_internos_trabajadores: 12 },
      // { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 17 },
      { nombre_de_taller: 'Artículos de Limpieza', cantidad_de_internos_trabajadores: 8 },
      { nombre_de_taller: 'Artesanías', cantidad_de_internos_trabajadores: 19 }
    ];
    // Calcula el total de internos trabajadores
    this.totalInternossaltanoa = this.tallersaltanoa.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);
    
  }
}

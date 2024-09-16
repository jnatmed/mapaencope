import { Component, OnInit } from '@angular/core';


interface Taller {
  nombre_de_taller: string;
  cantidad_de_internos_trabajadores: number;
}

@Component({
  selector: 'app-formosa',
  templateUrl: './formosa.component.html',
  styleUrls: ['./formosa.component.css']
})
export class FormosaComponent implements OnInit {

  talleresformosau10: Taller[] = [];
  totalInternosformosau10: number;
  
  imagesU10 = [
    { src: './assets/img/u10.png', alt: 'u10' },
    { src: './assets/img/u10-1.jpg', alt: 'u10' },
    { src: './assets/img/u10-2.jpg', alt: 'u10' },
    { src: './assets/img/u10-3.jpg', alt: 'u10' },
    { src: './assets/img/u10-4.jpg', alt: 'u10' },
    { src: './assets/img/u10-5.jpg', alt: 'u10' },
    { src: './assets/img/u10-6.jpg', alt: 'u10' },
    { src: './assets/img/u10-7.jpg', alt: 'u10' },
    { src: './assets/img/u10-8.jpg', alt: 'u10' },
  ];

  constructor() { }

  ngOnInit(): void {
    // Simula la carga de datos
    this.talleresformosau10 = [
      { nombre_de_taller: 'Porcicultura', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Ovinocultura', cantidad_de_internos_trabajadores: 1 },
      // { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 18 },
      { nombre_de_taller: 'Mantenimiento', cantidad_de_internos_trabajadores: 19 + 10 +18+10},
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 5 },
      // { nombre_de_taller: 'Higiene de Alojamiento', cantidad_de_internos_trabajadores: 10 },
      { nombre_de_taller: 'Electrotecnia', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Cría de Caprino', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Cocina Central', cantidad_de_internos_trabajadores: 15 },
      { nombre_de_taller: 'Chapa y Pintura', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Avicultura', cantidad_de_internos_trabajadores: 1 },
    ];

    // Calcula el total de internos trabajadores
    this.totalInternosformosau10 = this.talleresformosau10.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);

  }
}

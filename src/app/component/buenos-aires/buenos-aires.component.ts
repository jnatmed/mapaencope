import { Component, OnInit, TemplateRef } from '@angular/core';

// Define la interfaz para los datos del taller
interface Taller {
  nombre_de_taller: string;
  cantidad_de_internos_trabajadores: number;
}

@Component({
  selector: 'app-buenos-aires',
  templateUrl: './buenos-aires.component.html',
  styleUrls: ['./buenos-aires.component.css']
})
export class BuenosAiresComponent implements OnInit {

  templateSelected: TemplateRef<any>;
  tallerescpf1: Taller[] = []; // Array para almacenar los datos de los talleres
  tallerescpf2: Taller[] = []; // Array para almacenar los datos de los talleres
  tallerescpf4: Taller[] = []; // Nuevo array para los datos de los talleres
  talleresu19: Taller[] = []; // Nuevo array para los datos de los talleres
  tallerescpfvii: Taller[] = []; // Nuevo array para los datos de los talleres

  talleresu34: Taller[] = [];
  totalInternosu34: number;

  totalInternoscpf1: number; // Variable para almacenar el total de internos trabajadores
  totalInternoscpf2: number; // Variable para almacenar el total de internos trabajadores
  totalInternoscpf4: number; // Variable para almacenar el total de internos trabajadores
  totalInternosu19: number; // Variable para almacenar el total de internos trabajadores
  totalInternoscpfvii: number; // Variable para almacenar el total de internos trabajadores

  tallerescfja: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternoscfja: number; // Variable para almacenar el total de internos trabajadores

  tallerescpfcaba: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternoscpfcaba: number; // Variable para almacenar el total de internos trabajadores

  imagesCfja = [
    { src: './assets/img/cfja.png', alt: 'Complejo Federal de Jóvenes Adultos' },
    { src: './assets/img/cfja2.png', alt: 'Complejo Federal de Jóvenes Adultos' },
    { src: './assets/img/cfja3.png', alt: 'Complejo Federal de Jóvenes Adultos' },
  ];

  imagesCaba = [
    { src: './assets/img/caba.png', alt: 'caba' },
    { src: './assets/img/caba2.png', alt: 'caba' },
    { src: './assets/img/caba3.png', alt: 'caba' },
    // { src: './assets/img/caba_04.jpg', alt: 'caba' }
  ];

  imagesU34 = [
    { src: './assets/img/u34-1.jpg', alt: 'u34' },
    { src: './assets/img/u34-2.jpg', alt: 'u34' },
    { src: './assets/img/u34-3.jpg', alt: 'u34' },
  ];

  imagesCpf1 = [
    { src: './assets/img/cpf1.png', alt: 'Complejo Penitenciario Federal 1' },
    { src: './assets/img/cpf1-3.png', alt: 'Complejo Penitenciario Federal 1' },
    { src: './assets/img/cpf1-4.png', alt: 'Complejo Penitenciario Federal 1' },
    { src: './assets/img/cpf1-5.png', alt: 'Complejo Penitenciario Federal 1' },
    { src: './assets/img/cpf1-6.png', alt: 'Complejo Penitenciario Federal 1' },
    { src: './assets/img/cpf1-7.jpg', alt: 'Complejo Penitenciario Federal 1' },
    { src: './assets/img/cpf1-8.jpg', alt: 'Complejo Penitenciario Federal 1' },
    { src: './assets/img/cpf1-9.jpg', alt: 'Complejo Penitenciario Federal 1' },
    { src: './assets/img/cpf1-10.JPG', alt: 'Complejo Penitenciario Federal 1' },
    { src: './assets/img/cpf1-11.JPG', alt: 'Complejo Penitenciario Federal 1' },
    { src: './assets/img/cpf1-12.JPG', alt: 'Complejo Penitenciario Federal 1' },
    { src: './assets/img/cpf1-13.JPG', alt: 'Complejo Penitenciario Federal 1' },
    { src: './assets/img/cpf1-14.JPG', alt: 'Complejo Penitenciario Federal 1' },
    { src: './assets/img/cpf1-15.JPG', alt: 'Complejo Penitenciario Federal 1' },
    { src: './assets/img/cpf1-16.JPG', alt: 'Complejo Penitenciario Federal 1' },
    { src: './assets/img/cpf1-17.JPG', alt: 'Complejo Penitenciario Federal 1' },
    { src: './assets/img/cpf1-18.JPG', alt: 'Complejo Penitenciario Federal 1' },
    { src: './assets/img/cpf1-19.JPG', alt: 'Complejo Penitenciario Federal 1' }    
  ];

  imagesCpf2 = [
    { src: './assets/img/cpf2.png', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-2.png', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-3.png', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-4.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-5.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-6.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-7.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-8.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-9.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-10.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-11.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-12.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-13.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-14.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-15.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-16.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-17.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-18.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-19.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-20.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-21.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-22.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-23.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-24.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-25.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-26.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-27.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-28.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-29.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-30.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-31.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-32.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-33.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-34.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-35.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-36.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-37.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-38.jpeg', alt: 'Complejo Penitenciario Federal 2' },
    { src: './assets/img/cpf2-39.jpeg', alt: 'Complejo Penitenciario Federal 2' }    
  ];

  constructor() { }

  ngOnInit(): void {
    // Simula la carga de datos
    this.tallerescpf1 = [
      { nombre_de_taller: 'Zapatería', cantidad_de_internos_trabajadores: 15 },
      { nombre_de_taller: 'Sastrería', cantidad_de_internos_trabajadores: 24 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 3 },
      // { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 66 },
      { nombre_de_taller: 'Mantenimiento', cantidad_de_internos_trabajadores: 53 + 46 + 66 + 398 },
      { nombre_de_taller: 'Imprenta', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Huerta', cantidad_de_internos_trabajadores: 20 },
      // { nombre_de_taller: 'Higiene de Alojamiento', cantidad_de_internos_trabajadores: 398 },
      { nombre_de_taller: 'Costura', cantidad_de_internos_trabajadores: 16 },
      { nombre_de_taller: 'Carpintería Metálica', cantidad_de_internos_trabajadores: 11 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 3 },
      // { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 46 },
      { nombre_de_taller: 'Artículos de Limpieza', cantidad_de_internos_trabajadores: 107 }
    ];

    this.tallerescpf2 = [
      { nombre_de_taller: 'Sastrería', cantidad_de_internos_trabajadores: 49 },
      // { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 59 },
      { nombre_de_taller: 'Mantenimiento', cantidad_de_internos_trabajadores: 109 + 276 +59 + 176},
      { nombre_de_taller: 'Lavadero de Ropa', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 5 },
      // { nombre_de_taller: 'Higiene de Alojamientos', cantidad_de_internos_trabajadores: 176 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Fábrica de Pastas', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Cocina Central', cantidad_de_internos_trabajadores: 59 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 29 },
      // { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 276 },
      { nombre_de_taller: 'Artículos de Limpieza', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Armado de Broches', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Anexo Carpintería', cantidad_de_internos_trabajadores: 9 },
      { nombre_de_taller: 'Anexo Bloquería', cantidad_de_internos_trabajadores: 2 }
    ];

    this.tallerescpf4 = [
      { nombre_de_taller: 'Tejido', cantidad_de_internos_trabajadores: 24 },
      { nombre_de_taller: 'Taller Copiado y Encuadernado', cantidad_de_internos_trabajadores: 10 },
      { nombre_de_taller: 'Sublimado', cantidad_de_internos_trabajadores: 11 },
      { nombre_de_taller: 'Repostería', cantidad_de_internos_trabajadores: 10 },
      { nombre_de_taller: 'Reciclado', cantidad_de_internos_trabajadores: 42 },
      { nombre_de_taller: 'Peluquería', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Muñequera', cantidad_de_internos_trabajadores: 22 },
      // { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 17 },
      { nombre_de_taller: 'Mantenimiento', cantidad_de_internos_trabajadores: 63 + 116+17+5},
      { nombre_de_taller: 'Lavadero de Ropa', cantidad_de_internos_trabajadores: 11 },
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 5 },
      // { nombre_de_taller: 'Higiene de Alojamientos', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Florihorticultura', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Fibrofacil', cantidad_de_internos_trabajadores: 19 },
      { nombre_de_taller: 'Estrechando Manos', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Costura', cantidad_de_internos_trabajadores: 19 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 14 },
      // { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 116 }
    ];

    this.talleresu19 = [
      { nombre_de_taller: 'Tambo', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Quesería', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Porcicultura', cantidad_de_internos_trabajadores: 6 },
      // { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 11 },
      { nombre_de_taller: 'Mantenimiento', cantidad_de_internos_trabajadores: 36 + 3+11+12},
      { nombre_de_taller: 'Huerta Orgánica', cantidad_de_internos_trabajadores: 4 },
      // { nombre_de_taller: 'Higiene de Alojamientos', cantidad_de_internos_trabajadores: 12 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Domisanitario', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Costura', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 7 },
      // { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Armado de Broches', cantidad_de_internos_trabajadores: 9 },
      { nombre_de_taller: 'Alimento Balanceado', cantidad_de_internos_trabajadores: 6 }
    ];    


    this.tallerescfja = [
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 8 },
      // { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 17 },
      { nombre_de_taller: 'Mantenimiento', cantidad_de_internos_trabajadores: 7 + 3+17+2},
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Huerta', cantidad_de_internos_trabajadores: 13 },
      // { nombre_de_taller: 'Higiene de Alojamientos', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Carpintería Metálica', cantidad_de_internos_trabajadores: 6 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 55 },
      // { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Artículos de Limpieza', cantidad_de_internos_trabajadores: 74 },
      { nombre_de_taller: 'Alimento Balanceado', cantidad_de_internos_trabajadores: 3 }
    ];

    // Simula la carga de datos
    this.tallerescpfcaba = [
      { nombre_de_taller: 'Sastrería', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 9 },
      // { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 11 },
      { nombre_de_taller: 'Mantenimiento', cantidad_de_internos_trabajadores: 6 + 30 +11+384},
      // { nombre_de_taller: 'Higiene de Alojamientos', cantidad_de_internos_trabajadores: 184 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Fibrofacil', cantidad_de_internos_trabajadores: 56 },
      { nombre_de_taller: 'Electrotecnia', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Domisanitario', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Costura', cantidad_de_internos_trabajadores: 310 },
      { nombre_de_taller: 'Cocina Central', cantidad_de_internos_trabajadores: 8 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Automotores', cantidad_de_internos_trabajadores: 1 },
      // { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 30 },
      { nombre_de_taller: 'Armado de Juguetes Didácticos', cantidad_de_internos_trabajadores: 182 }
    ];

    this.tallerescpfvii = [
      { nombre_de_taller: 'Panaderia', cantidad_de_internos_trabajadores: 7 },
      // { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Mantenimiento', cantidad_de_internos_trabajadores: 6 + 48+4 },
      { nombre_de_taller: 'Lavadero de Ropa', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Huerta', cantidad_de_internos_trabajadores: 9 },
      { nombre_de_taller: 'Costura', cantidad_de_internos_trabajadores: 22 },
      // { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 48 },
      { nombre_de_taller: 'Artículos de Limpieza', cantidad_de_internos_trabajadores: 4 },
    ];

    this.talleresu34 = [
      { nombre_de_taller: 'Mantenimiento', cantidad_de_internos_trabajadores: 25 },

    ];
    this.totalInternosu34 = this.talleresu34.reduce((total, taller) => total + taller.cantidad_de_internos_trabajadores, 0);    

    // Calcula el total de internos trabajadores
    this.totalInternoscpf1 = this.tallerescpf1.reduce((total, taller) => total + taller.cantidad_de_internos_trabajadores, 0);
    this.totalInternoscpf2 = this.tallerescpf2.reduce((total, taller) => total + taller.cantidad_de_internos_trabajadores, 0);
    this.totalInternoscpf4 = this.tallerescpf4.reduce((total, taller) => total + taller.cantidad_de_internos_trabajadores, 0);
    this.totalInternosu19 = this.talleresu19.reduce((total, taller) => total + taller.cantidad_de_internos_trabajadores, 0);
    this.totalInternoscfja = this.tallerescfja.reduce((total, taller) => total + taller.cantidad_de_internos_trabajadores, 0);
    this.totalInternoscpfcaba = this.tallerescpfcaba.reduce((total, taller) => total + taller.cantidad_de_internos_trabajadores, 0);
    this.totalInternoscpfvii = this.tallerescpfvii.reduce((total, taller) => total + taller.cantidad_de_internos_trabajadores, 0);

  }
}

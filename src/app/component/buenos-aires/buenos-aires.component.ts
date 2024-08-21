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

  totalInternoscpf1: number; // Variable para almacenar el total de internos trabajadores
  totalInternoscpf2: number; // Variable para almacenar el total de internos trabajadores
  totalInternoscpf4: number; // Variable para almacenar el total de internos trabajadores
  totalInternosu19: number; // Variable para almacenar el total de internos trabajadores
  totalInternoscpfvii: number; // Variable para almacenar el total de internos trabajadores

  tallerescfja: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternoscfja: number; // Variable para almacenar el total de internos trabajadores

  tallerescpfcaba: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternoscpfcaba: number; // Variable para almacenar el total de internos trabajadores

  constructor() { }

  ngOnInit(): void {
    // Simula la carga de datos
    this.tallerescpf1 = [
      { nombre_de_taller: 'Zapatería', cantidad_de_internos_trabajadores: 15 },
      { nombre_de_taller: 'Sastrería', cantidad_de_internos_trabajadores: 24 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 66 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 53 },
      { nombre_de_taller: 'Imprenta', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Huerta', cantidad_de_internos_trabajadores: 20 },
      { nombre_de_taller: 'Higiene de Alojamiento', cantidad_de_internos_trabajadores: 398 },
      { nombre_de_taller: 'Costura', cantidad_de_internos_trabajadores: 16 },
      { nombre_de_taller: 'Carpintería Metálica', cantidad_de_internos_trabajadores: 11 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 46 },
      { nombre_de_taller: 'Artículos de Limpieza', cantidad_de_internos_trabajadores: 107 }
    ];

    this.tallerescpf2 = [
      { nombre_de_taller: 'Sastrería', cantidad_de_internos_trabajadores: 49 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 59 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 109 },
      { nombre_de_taller: 'Lavadero de Ropa', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Higiene de Alojamientos', cantidad_de_internos_trabajadores: 176 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Fábrica de Pastas', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Cocina Central', cantidad_de_internos_trabajadores: 59 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 29 },
      { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 276 },
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
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 17 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 63 },
      { nombre_de_taller: 'Lavadero de Ropa', cantidad_de_internos_trabajadores: 11 },
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Higiene de Alojamientos', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Florihorticultura', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Fibrofacil', cantidad_de_internos_trabajadores: 19 },
      { nombre_de_taller: 'Estrechando Manos', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Costura', cantidad_de_internos_trabajadores: 19 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 14 },
      { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 116 }
    ];

    this.talleresu19 = [
      { nombre_de_taller: 'Tambo', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Quesería', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Porcicultura', cantidad_de_internos_trabajadores: 6 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 11 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 36 },
      { nombre_de_taller: 'Huerta Orgánica', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Higiene de Alojamientos', cantidad_de_internos_trabajadores: 12 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Domisanitario', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Costura', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Armado de Broches', cantidad_de_internos_trabajadores: 9 },
      { nombre_de_taller: 'Alimento Balanceado', cantidad_de_internos_trabajadores: 6 }
    ];    


    this.tallerescfja = [
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 8 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 17 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Huerta', cantidad_de_internos_trabajadores: 13 },
      { nombre_de_taller: 'Higiene de Alojamientos', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Carpintería Metálica', cantidad_de_internos_trabajadores: 6 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 55 },
      { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Artículos de Limpieza', cantidad_de_internos_trabajadores: 74 },
      { nombre_de_taller: 'Alimento Balanceado', cantidad_de_internos_trabajadores: 3 }
    ];

    // Simula la carga de datos
    this.tallerescpfcaba = [
      { nombre_de_taller: 'Sastrería', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 9 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 11 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 6 },
      { nombre_de_taller: 'Higiene de Alojamientos', cantidad_de_internos_trabajadores: 184 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Fibrofacil', cantidad_de_internos_trabajadores: 56 },
      { nombre_de_taller: 'Electrotecnia', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Domisanitario', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Costura', cantidad_de_internos_trabajadores: 310 },
      { nombre_de_taller: 'Cocina Central', cantidad_de_internos_trabajadores: 8 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Automotores', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 30 },
      { nombre_de_taller: 'Armado de Juguetes Didácticos', cantidad_de_internos_trabajadores: 182 }
    ];

    this.tallerescpfvii = [
      { nombre_de_taller: 'Panaderia', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 6 },
      { nombre_de_taller: 'Lavadero de Ropa', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Huerta', cantidad_de_internos_trabajadores: 9 },
      { nombre_de_taller: 'Costura', cantidad_de_internos_trabajadores: 22 },
      { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 48 },
      { nombre_de_taller: 'Artículos de Limpieza', cantidad_de_internos_trabajadores: 4 },
    ];

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

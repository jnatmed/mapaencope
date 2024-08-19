import { Component, OnInit, TemplateRef } from '@angular/core';

// Define la interfaz para los datos del taller
interface Taller {
  nombre_de_taller: string;
  cantidad_de_internos_trabajadores: number;
}

@Component({
  selector: 'app-neuquen',
  templateUrl: './neuquen.component.html',
  styleUrls: ['./neuquen.component.css']
})
export class NeuquenComponent implements OnInit {

  templateSelected: TemplateRef<any>;
  talleresneuquencpfv: Taller[] = []; // Array para almacenar los datos de los talleres
  totalInternosneuquencpfv: number; // Variable para almacenar el total de internos trabajadores

  constructor() { }

  ngOnInit(): void {
    // Simula la carga de datos
    this.talleresneuquencpfv = [
      { nombre_de_taller: 'Sastrería', cantidad_de_internos_trabajadores: 18 },
      { nombre_de_taller: 'Panadería', cantidad_de_internos_trabajadores: 7 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 66 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 96 },
      { nombre_de_taller: 'Lavadero de Ropa', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Horticultura', cantidad_de_internos_trabajadores: 79 },
      { nombre_de_taller: 'Higiene de Alojamientos', cantidad_de_internos_trabajadores: 216 },
      { nombre_de_taller: 'Herrería', cantidad_de_internos_trabajadores: 6 },
      { nombre_de_taller: 'Chapa y Pintura', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 10 },
      { nombre_de_taller: 'Artesanías', cantidad_de_internos_trabajadores: 5 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternosneuquencpfv = this.talleresneuquencpfv.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);
  }
}

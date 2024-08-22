import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

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

  // Configuración del gráfico
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    }
  };

  pieChartLabels: string[] = []; // Nombres de talleres
  pieChartData: ChartData<'pie'> = {
    labels: this.pieChartLabels,
    datasets: [
      { 
        data: [], 
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0', 
          '#9966FF', '#FF6F61', '#6A9A1F', '#D65DB1', '#FFC0CB', 
          '#008080', '#FFA500', '#800080', '#FFD700', '#00FFFF'
        ]
      }
    ]
  };

  pieChartLegend = true;
  pieChartPlugins = [];
  pieChartType: 'pie' = 'pie';

  constructor() { }

  ngOnInit(): void {
    // Simula la carga de datos
    this.talleresformosau10 = [
      { nombre_de_taller: 'Porcicultura', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Ovinocultura', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 18 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 19 + 10 },
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Higiene de Alojamiento', cantidad_de_internos_trabajadores: 10 },
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

    // Actualiza los datos del gráfico
    this.pieChartLabels = this.talleresformosau10.map(taller => taller.nombre_de_taller);
    this.pieChartData.datasets[0].data = this.talleresformosau10.map(taller => taller.cantidad_de_internos_trabajadores);
  }
}

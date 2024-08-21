import { Component, OnInit, TemplateRef } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { Color } from 'ng2-charts';

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

  templateSelected: TemplateRef<any>;
  talleresformosau10: Taller[] = [];
  totalInternosformosau10: number;

  // Configuración del gráfico
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  barChartLabels: string[] = []; // Nombres de talleres
  barChartData: ChartData = {
    labels: this.barChartLabels,
    datasets: [
      { data: [], label: 'Cantidad de Internos Trabajadores' }
    ]
  };
  barChartColors: Color[] = [
    { backgroundColor: 'rgba(0, 204, 204, 0.5)' }
  ];
  barChartLegend = true;
  barChartPlugins = [];
  barChartType: 'bar' = 'bar';
  

  constructor() { }

  ngOnInit(): void {
    // Simula la carga de datos
    this.talleresformosau10 = [
      { nombre_de_taller: 'Porcicultura', cantidad_de_internos_trabajadores: 3 },
      { nombre_de_taller: 'Ovinocultura', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Mayordomía', cantidad_de_internos_trabajadores: 18 },
      { nombre_de_taller: 'Mantenimiento Gral del Establecimiento', cantidad_de_internos_trabajadores: 19 },
      { nombre_de_taller: 'Lavadero Automotor', cantidad_de_internos_trabajadores: 5 },
      { nombre_de_taller: 'Higiene de Alojamiento', cantidad_de_internos_trabajadores: 10 },
      { nombre_de_taller: 'Electrotecnia', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Cría de Caprino', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Cocina Central', cantidad_de_internos_trabajadores: 15 },
      { nombre_de_taller: 'Chapa y Pintura', cantidad_de_internos_trabajadores: 2 },
      { nombre_de_taller: 'Carpintería de Madera', cantidad_de_internos_trabajadores: 4 },
      { nombre_de_taller: 'Avicultura', cantidad_de_internos_trabajadores: 1 },
      { nombre_de_taller: 'Aseo y Limpieza', cantidad_de_internos_trabajadores: 10 }
    ];

    // Calcula el total de internos trabajadores
    this.totalInternosformosau10 = this.talleresformosau10.reduce((total, taller) => {
      return total + taller.cantidad_de_internos_trabajadores;
    }, 0);

    // Actualiza los datos del gráfico
    this.barChartLabels = this.talleresformosau10.map(taller => taller.nombre_de_taller);
    this.barChartData.datasets[0].data = this.talleresformosau10.map(taller => taller.cantidad_de_internos_trabajadores);
  }
}

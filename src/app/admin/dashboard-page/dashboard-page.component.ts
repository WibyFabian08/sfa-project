import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    const myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            data: [12, 30, 3, 5],
            backgroundColor: '#FFBA46',
            borderColor: "#FFBA46",
            borderWidth: 2,
            pointBackgroundColor: "#FFBA46",
            pointRadius: 7
          },
          {
            data: [1, 3, 5, 7, 9, 10],
            backgroundColor: '#92011C',
            borderColor: '#92011C',
            borderWidth: 2,
            pointBackgroundColor: "#92011C",
            pointRadius: 7
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false,
              drawBorder: false
            },
          },
          x: {
            beginAtZero: true,
            grid: {
              display: false
            },

          },
        },
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      },
    });
  }
}

import { Component} from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-charts-data',
  standalone: true,
  imports: [],
  templateUrl: './charts-data.component.html',
  styleUrl: './charts-data.component.css'
})
export class ChartsDataComponent {

  ngAfterViewInit() {
    const barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Modules', 'Teachers', 'Students', 'Courses'],
        datasets: [{
          label: 'Total',
          data: [10, 15, 200, 5],
          backgroundColor: [
            'rgba(59, 130, 246, 0.2)',
            'rgba(52, 211, 153, 0.2)',
            'rgba(245, 158, 11, 0.2)',
            'rgba(167, 139, 250, 0.2)'
          ],
          borderColor: [
            'rgba(59, 130, 246, 1)',
            'rgba(52, 211, 153, 1)',
            'rgba(245, 158, 11, 1)',
            'rgba(167, 139, 250, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Modules', 'Teachers', 'Students', 'Courses'],
        datasets: [{
          label: 'Total',
          data: [10, 15, 200, 5],
          backgroundColor: [
            'rgba(59, 130, 246, 0.2)',
            'rgba(52, 211, 153, 0.2)',
            'rgba(245, 158, 11, 0.2)',
            'rgba(167, 139, 250, 0.2)'
          ],
          borderColor: [
            'rgba(59, 130, 246, 1)',
            'rgba(52, 211, 153, 1)',
            'rgba(245, 158, 11, 1)',
            'rgba(167, 139, 250, 1)'
          ],
          borderWidth: 1,

        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }
}

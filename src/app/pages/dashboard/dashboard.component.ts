import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  host: { class: 'w-full relative w-screen' },
})
export class DashboardComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Transfert',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
        },
        {
          label: 'Withdraw',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderDash: [5, 5],
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--teal-500'),
        },
        {
          label: 'Deposit',
          data: [12, 51, 62, 33, 21, 62, 45],
          fill: true,
          borderColor: documentStyle.getPropertyValue('--orange-500'),
          tension: 0.4,
          backgroundColor: 'rgba(255,167,38,0.2)',
        },
      ],
    };
    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };
  }
}

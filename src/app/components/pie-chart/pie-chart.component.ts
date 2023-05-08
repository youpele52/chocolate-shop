import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';
import { Nutrition } from 'src/type';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  @Input() nutrition: Nutrition | undefined;
  public chart: any;

  createChart() {
    if (this.nutrition) {
      this.chart = new Chart('MyChart', {
        type: 'pie', //this denotes tha type of chart

        data: {
          // values on X-Axis
          labels: Object.keys(this.nutrition).map((nutrient) =>
            nutrient.toUpperCase()
          ),
          datasets: [
            {
              label: 'Nutritional value',
              data: [
                this.nutrition.fat.total,
                this.nutrition.carbohydrates.total,
                this.nutrition.protein,
                this.nutrition.salt,
              ],
              backgroundColor: ['yellow', 'purple', 'violet', 'grey'],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          aspectRatio: 1.5,
        },
      });
    }
  }
  ngOnInit() {
    this.createChart();
  }
}

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-pie1',
  templateUrl: './pie1.component.html',
  styleUrls: ['./pie1.component.css']
})
export class Pie1Component implements OnInit{

  highcharts = Highcharts;
  chartOptions = {};


  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        plotBorderWidth: null,
        plotShadow: false,
       
      },
      title: {
        text: "Number of employees by gender"
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },

      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',

          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },

    

      exporting: {
        enabled: true
      },

      colors :[ '#ADD8E6' , '#6495ED'],  

      credits: {
        enabled: false
      },
      series: [{
        type: 'pie',
        name: '%',
         data: [
            ['Women',   45.0],
           
            {
               name: 'Man',
               y: 55.0,
               sliced: true,
               selected: true
            }
            
         ]
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}




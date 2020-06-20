import { Component, OnInit, Input } from '@angular/core';

import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';

Highcharts.createElement('link', {
  href: 'https://fonts.googleapis.com/css?family=Unica+One',
  rel: 'stylesheet',
  type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {

    this.chartOptions = {

      chart: {
        style: {
          fontFamily: 'Norwester, sans-serif'},
        type: 'line'
    },
    title: {
      style: {
        color: '#0e0d0d',
        fontFamily: 'Norwester, sans-serif'},
        text: 'CORRIDAS REALIZADAS'
    },
    subtitle: {
      style: {
        color: '#0e0d0d',
        fontFamily: 'Norwester, sans-serif'},
        text: 'corridas realizadas com o passar do tempo'
    },
    xAxis: { 
      gridLineColor: '#a258c7',
      lineColor: '#a258c7',
      minorGridLineColor: '#a258c7',
      tickColor: '#a258c7',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      minorGridLineColor: '#a258c7',
      tickColor: '#a258c7',
      gridLineColor: '#a258c7',
      lineColor: '#a258c7',
        title: {
            text: 'Corridas'
        }
    },
    plotOptions: {
        line: {
          color: '#a258c7',
            dataLabels: {
              color: '#0e0d0d',
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Bike',
        data: [3, 4, 5, 8, 11, 15, 17, 16, 14, 10, 6, 4]
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

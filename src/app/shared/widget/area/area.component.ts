import { Component, OnInit, Input } from '@angular/core';

import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';
import { Historico } from '../../models/historico';
import { Corridas } from '../../models/corridas';

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

  historico: Historico[];

  currentCorridas: Corridas[];
  datas: string[];
  quantidadeCorridas: any[];
 array_unique(array){
    return array.filter(function(el, index, arr) {
        return index == arr.indexOf(el);
    });
}
  ngOnInit() {
    var arr = [];
    this.currentCorridas = JSON.parse(localStorage.getItem('corridas'));

    this.historico = JSON.parse(localStorage.getItem('historico'));
    //console.log(this.currentCorridas);
    var dia = [];
    for (let c in this.currentCorridas) {

      arr.push(this.currentCorridas[c].getBike);
      dia.push(this.currentCorridas[c].getBike.substring(2, 4));
      //console.log(this.currentCorridas[c].getBike);
      console.log(this.currentCorridas[c].getBike.substring(2, 4));

    }
    
console.log(this.array_unique(dia));

console.log(" aaaaa" +this.array_unique(dia));

    this.chartOptions = {

      chart: {
        style: {
          fontFamily: 'Norwester, sans-serif'
        },
        type: 'line'
      },
      title: {
        style: {
          color: '#0e0d0d',
          fontFamily: 'Norwester, sans-serif'
        },
        text: 'CORRIDAS REALIZADAS'
      },
      subtitle: {
        style: {
          color: '#0e0d0d',
          fontFamily: 'Norwester, sans-serif'
        },
        text: 'corridas realizadas com o passar do tempo'
      },
      xAxis: {
        gridLineColor: '#a258c7',
        lineColor: '#a258c7',
        minorGridLineColor: '#a258c7',
        tickColor: '#a258c7',
        categories: this.array_unique(dia)
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
        data: [2, 3, 4, 7]
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

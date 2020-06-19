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
      xAxis: {
        gridLineColor: '#707073',
        labels: {
          style: {
            color: '#7b1fa2'
          }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
          style: {
            color: '#A0A0A3'
          }
        }
      },
      yAxis: {
        gridLineColor: '#707073',
        labels: {
          style: {
            color: '#E0E0E3'
          }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
          style: {
            color: '#A0A0A3'
          }
        }
      },
     
      plotOptions: {
        series: {
          dataLabels: {
            color: '#F0F0F3',
            style: {
              fontSize: '13px'
            }
          },
          marker: {
            lineColor: '#333'
          }
        },
        boxplot: {
          fillColor: '#505053'
        },
        candlestick: {
          lineColor: 'white'
        },
        errorbar: {
          color: 'white'
        }
      },
      legend: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        itemStyle: {
          color: '#7b1fa2'
        },
        itemHoverStyle: {
          color: '#FFF'
        },
        itemHiddenStyle: {
          color: '#606063'
        },
        title: {
          style: {
            color: '#C0C0C0'
          }
        }
      },
      labels: {
        style: {
          color: '#707073'
        }
      },
      drilldown: {
        activeAxisLabelStyle: {
          color: '#F0F0F3'
        },
        activeDataLabelStyle: {
          color: '#F0F0F3'
        }
      },
      navigation: {
        buttonOptions: {
          symbolStroke: '#DDDDDD',
          theme: {
            fill: '#505053'
          }
        }
      },
      colors: ['#f45b5b', '#8085e9', '#8d4654', '#7798BF', '#aaeeee',
      '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
  chart: {
        type: 'area',
        backgroundColor:  {
          backgroundColor: 'white',
          style: {
              fontFamily: 'Signika, serif'
          }
        },
        style: {
          fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
      },
      title: {
        text: 'Crescimento da quantidade de Bikes',
        style: {
          color: '#7b1fa2',
          textTransform: 'uppercase',
          fontSize: '20px'
        }
      },
      subtitle: {
        text: 'Quantidade de Bikes',
        subtitle: {
          style: {
            color: '#E0E0E3',
            textTransform: 'uppercase'
          }
        }
      },
      tooltip: {
        split: true,
        valueSuffix: ' unidades',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
          color: '#F0F0F0'
        }
      },
      credits: {
        enabled: false,
        style: {
          color: '#666'
        }
      },
      exporting: {
        enabled: true,
      },
      series: [{
        name: 'Cefsa',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
        name: 'Fabrica',
        data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
        name: 'Fabrica 2',
        data: [163, 203, 276, 408, 547, 729, 628]
      }, {
        name: 'Fazenda',
        data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
        name: 'fabrica 3',
        data: [2, 2, 2, 6, 13, 30, 46]
      }],

      // scroll charts
      rangeSelector: {
        buttonTheme: {
          fill: '#505053',
          stroke: '#000000',
          style: {
            color: '#CCC'
          },
          states: {
            hover: {
              fill: '#707073',
              stroke: '#000000',
              style: {
                color: 'white'
              }
            },
            select: {
              fill: '#000003',
              stroke: '#000000',
              style: {
                color: 'white'
              }
            }
          }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
          backgroundColor: '#333',
          color: 'silver'
        },
        labelStyle: {
          color: 'silver'
        }
      },
      navigator: {
        handles: {
          backgroundColor: '#666',
          borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
          color: '#7798BF',
          lineColor: '#A6C7ED'
        },
        xAxis: {
          gridLineColor: '#505053'
        }
      },
      scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
      }
    };
   
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}

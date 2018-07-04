import { GoogleChartsBaseService } from './google-charts.base.service';
import { Injectable } from '@angular/core';
import { GeoChartConfig } from '../models/geo-chart-config';

declare var google: any;

@Injectable()
export class GoogleGeoChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildGeoChart(elementId: String, data: any[], config: GeoChartConfig) : void {  
    var chartFunc = () => { return new google.visualization.GeoChart(document.getElementById(<string>elementId)); };
    var options = {
            displayMode: config.displayMode,
            resolution: config.resolution,
            colorAxis: config.colorAxis,
            region: config.region,
            legend: config.legend
      };

    this.buildChart(data, chartFunc, options);
  }
}
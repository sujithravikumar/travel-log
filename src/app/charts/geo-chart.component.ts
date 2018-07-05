import { Component, Input, OnInit } from '@angular/core';

import { GoogleGeoChartService } from '../services/google-geo-chart.service';
import { GeoChartConfig } from '../models/geo-chart-config';

declare var google: any;


@Component({
  selector: 'app-geo-chart',
  templateUrl: './geo-chart.component.html'
})
export class GeoChartComponent implements OnInit {

    @Input() data: any[];
    @Input() config: GeoChartConfig;
    @Input() elementId: String;

    constructor(private _geoChartService: GoogleGeoChartService) {}

    ngOnInit(): void {
        this._geoChartService.BuildGeoChart(this.elementId, this.data, this.config);
    }
}

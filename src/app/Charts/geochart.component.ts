import { Component, Input, OnInit } from '@angular/core';

import { GoogleGeoChartService } from '../Services/google-geo-chart.service';
import { GeoChartConfig } from '../Models/GeoChartConfig';

declare var google: any;


@Component({
  selector: 'geo-chart',
  templateUrl: './geochart.component.html'
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
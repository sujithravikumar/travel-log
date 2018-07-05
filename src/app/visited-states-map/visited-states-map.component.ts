import { Component, OnInit } from '@angular/core';
import { GeoChartConfig } from '../models/geo-chart-config';
import { ColorAxis } from '../models/geo-chart-config';

@Component({
  selector: 'app-visited-states-map',
  templateUrl: './visited-states-map.component.html',
  styleUrls: ['./visited-states-map.component.css']
})
export class VisitedStatesMapComponent implements OnInit {
  title = 'Visited States Map';

  data: any[];
  colorAxis: ColorAxis;
  config: GeoChartConfig;
  elementId: String;

  ngOnInit(): void {

    // Geochart1 Data & Config
    this.data = [
      ['State', 'Value', {role: 'tooltip'}],
      [{v: 'US-AL', f: 'Alabama'}, 0, ''],
      [{v: 'US-AK', f: 'Alaska'}, 0, ''],
      [{v: 'US-AZ', f: 'Arizona'}, 2, 'Lived'],
      [{v: 'US-AR', f: 'Arkansas'}, 0, ''],
      [{v: 'US-CA', f: 'California'}, 1, 'Visited'],
      [{v: 'US-CO', f: 'Colorado'}, 1, 'Visited'],
      [{v: 'US-CT', f: 'Connecticut'}, 0, ''],
      [{v: 'US-DE', f: 'Delaware'}, 0, ''],
      [{v: 'US-DC', f: 'District Of Columbia'}, 1, 'Visited'],
      [{v: 'US-FL', f: 'Florida'}, 1, 'Visited'],
      [{v: 'US-GA', f: 'Georgia'}, 1, 'Visited'],
      [{v: 'US-HI', f: 'Hawaii'}, 0, ''],
      [{v: 'US-ID', f: 'Idaho'}, 0, ''],
      [{v: 'US-IL', f: 'Illinois'}, 1, 'Visited'],
      [{v: 'US-IN', f: 'Indiana'}, 0, ''],
      [{v: 'US-IA', f: 'Iowa'}, 0, ''],
      [{v: 'US-KS', f: 'Kansas'}, 0, ''],
      [{v: 'US-KY', f: 'Kentucky'}, 0, ''],
      [{v: 'US-LA', f: 'Louisiana'}, 0, ''],
      [{v: 'US-ME', f: 'Maine'}, 1, 'Visited'],
      [{v: 'US-MD', f: 'Maryland'}, 1, 'Visited'],
      [{v: 'US-MA', f: 'Massachusetts'}, 1, 'Visited'],
      [{v: 'US-MI', f: 'Michigan'}, 1, 'Visited'],
      [{v: 'US-MN', f: 'Minnesota'}, 0, ''],
      [{v: 'US-MS', f: 'Mississippi'}, 0, ''],
      [{v: 'US-MO', f: 'Missouri'}, 0, ''],
      [{v: 'US-MT', f: 'Montana'}, 0, ''],
      [{v: 'US-NE', f: 'Nebraska'}, 0, ''],
      [{v: 'US-NV', f: 'Nevada'}, 1, 'Visited'],
      [{v: 'US-NH', f: 'New Hampshire'}, 1, 'Visited'],
      [{v: 'US-NJ', f: 'New Jersey'}, 1, 'Visited'],
      [{v: 'US-NM', f: 'New Mexico'}, 0, ''],
      [{v: 'US-NY', f: 'New York'}, 1, 'Visited'],
      [{v: 'US-NC', f: 'North Carolina'}, 0, ''],
      [{v: 'US-ND', f: 'North Dakota'}, 0, ''],
      [{v: 'US-OH', f: 'Ohio'}, 0, ''],
      [{v: 'US-OK', f: 'Oklahoma'}, 0, ''],
      [{v: 'US-OR', f: 'Oregon'}, 2, 'Lived'],
      [{v: 'US-PA', f: 'Pennsylvania'}, 1, 'Visited'],
      [{v: 'US-RI', f: 'Rhode Island'}, 0, ''],
      [{v: 'US-SC', f: 'South Carolina'}, 0, ''],
      [{v: 'US-SD', f: 'South Dakota'}, 0, ''],
      [{v: 'US-TN', f: 'Tennessee'}, 1, 'Visited'],
      [{v: 'US-TX', f: 'Texas'}, 1, 'Visited'],
      [{v: 'US-UT', f: 'Utah'}, 0, ''],
      [{v: 'US-VT', f: 'Vermont'}, 0, ''],
      [{v: 'US-VA', f: 'Virginia'}, 0, ''],
      [{v: 'US-WA', f: 'Washington'}, 1, 'Visited'],
      [{v: 'US-WV', f: 'West Virginia'}, 0, ''],
      [{v: 'US-WI', f: 'Wisconsin'}, 0, ''],
      [{v: 'US-WY', f: 'Wyoming'}, 0, '']
    ];

    this.colorAxis = new ColorAxis(['#d1d3cd', '#009842', '#2c00db'], 0, 2);

    this.config = new GeoChartConfig('regions', 'provinces', this.colorAxis, 'US', 'none');
    this.elementId = 'statesVisitedMap';
  }

}

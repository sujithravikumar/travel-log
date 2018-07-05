declare const google: any;

export class GoogleChartsBaseService {
  constructor() {
    google.charts.load('current', {
      'packages': ['geochart'],
      'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
  }

  protected buildChart(data: any[], chartFunc: any, options: any): void {
    const func = (_chartFunc, _options) => {
      const datatable = google.visualization.arrayToDataTable(data);
      _chartFunc().draw(datatable, _options);
    };
    const callback = () => func(chartFunc, options);
    google.charts.setOnLoadCallback(callback);
  }
}

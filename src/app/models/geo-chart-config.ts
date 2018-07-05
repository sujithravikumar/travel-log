export class GeoChartConfig {
    displayMode: string;
    resolution: string;
    colorAxis: ColorAxis;
    region: string;
    legend: string;

    constructor(displayMode: string, resolution: string, colorAxis: ColorAxis, region: string, legend: string) {
        this.displayMode = displayMode;
        this.resolution = resolution;
        this.colorAxis = colorAxis;
        this.region = region;
        this.legend = legend;
    }
}

export class ColorAxis {
    colors: string[];
    minValue: number;
    maxValue: number;

    constructor(colors: string[], minValue: number, maxValue: number) {
        this.colors = colors;
        this.minValue = minValue;
        this.maxValue = maxValue;
    }
}

export class GeoChartConfig {
    displayMode: string;
    resolution: string;
    colorAxis: ColorAxis;
    region: string;
    legend: string;
    tooltip: ToolTip;

    constructor(displayMode: string, resolution: string, colorAxis: ColorAxis, region: string, legend: string, tooltip: ToolTip) {
        this.displayMode = displayMode;
        this.resolution = resolution;
        this.colorAxis = colorAxis;
        this.region = region;
        this.legend = legend;
        this.tooltip = tooltip;
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

export class ToolTip {
    isHtml: boolean;

    constructor(isHtml: boolean) {
        this.isHtml = isHtml;
    }
}

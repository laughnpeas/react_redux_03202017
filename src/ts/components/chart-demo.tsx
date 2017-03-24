import * as React from "react";

let googleChartsPromise: Promise<void> = null;

const loadGoogleCharts = () => {

    if (!googleChartsPromise) {
        googleChartsPromise = new Promise<void>((resolve) => {
            google.charts.load("current", { packages: ["corechart"] });
            google.charts.setOnLoadCallback(() => resolve());
        });
    }

    return googleChartsPromise;
};


interface ChartDemoProps {
    data: any;
    options: {
        title: string,
        curveType: string,
        legend: {
            position: string,
        },
    };
}

export class ChartDemo extends React.Component<ChartDemoProps, void> {

    private chartElement: HTMLElement = null;
    private chart: LineChart = null;

    constructor(props: ChartDemoProps) {
        super(props);
    }

    public componentDidMount() {
        loadGoogleCharts().then(() => {
            const chartDataTable = google.visualization.arrayToDataTable(this.props.data);
            this.chart = new google.visualization.LineChart(this.chartElement);
            this.chart.draw(chartDataTable, this.props.options);
        });
    }

    public componentWillUnmount() {
        loadGoogleCharts().then(() => {
            this.chart.clearChart();
            this.chart = null;
        });
    }

    public componentDidUpdate() {
        loadGoogleCharts().then(() => {
            const chartDataTable = google.visualization.arrayToDataTable(this.props.data);
            this.chart.draw(chartDataTable, this.props.options);
        });
    }

    public render(): React.ReactElement<null> {

        return <div
            ref={(divElement) => this.chartElement = divElement}
            style={({ width: "900px", height: "500px" })}></div>;
        // return null;
    }

}
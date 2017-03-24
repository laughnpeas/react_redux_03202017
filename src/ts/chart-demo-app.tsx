import * as React from "react";
import * as ReactDOM from "react-dom";

import { ChartDemo } from "./components/chart-demo";

interface ChartDemoToolProps {
    data: any[];
    options: {
        title: string,
        curveType: string,
        legend: {
            position: string,
        },
    };
}

interface ChartDemoToolState {
    firstYear?: number;
}

class ChartDemoTool extends React.Component<ChartDemoToolProps, ChartDemoToolState> {

    constructor(props: ChartDemoToolProps) {
        super(props);

        this.state = {
            firstYear: this.props.data.slice(1).reduce((a, b) => [ Math.min(Number(a[0]), Number(b[0])) ]),
        };
    }

    public onChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            [ e.currentTarget.name ]: Number(e.currentTarget.value),
        });
    }

    public render() {

        const data = [
            this.props.data[0],
            ...this.props.data.slice(1).filter((row) => Number(row[0]) >= this.state.firstYear),
        ];

        return <div>
            <span>How Far Back:</span>
            <input type="range" name="firstYear"
                min={this.props.data.slice(1).reduce((a, b) => [ Math.min(Number(a[0]), Number(b[0])) ])}
                max={this.props.data.slice(1).reduce((a, b) => [ Math.max(Number(a[0]), Number(b[0])) ])}
                value={this.state.firstYear.toString()} onChange={this.onChange} />
            <span>{this.state.firstYear}</span>
            <ChartDemo data={data} options={this.props.options} />
        </div>;
    }

}

const chartDetails = {
    data: [
        ["Year", "Sales", "Expenses"],
        ["2000",  1000,      400],
        ["2001",  1170,      460],
        ["2002",  660,       1120],
        ["2003",  1030,      540],
        ["2004",  1170,      890],
        ["2005",  1030,      540],
        ["2006",  800,      1120],
        ["2007",  930,      460],
        ["2008",  430,      540],
        ["2009",  1170,      540],
        ["2010",  800,      460],
        ["2011",  1030,      920],
        ["2012",  1170,      1300],
        ["2013",  930,      1120],
        ["2014",  1030,      540],
    ],
    options: {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
    },
};

ReactDOM.render(<ChartDemoTool {...chartDetails} />, document.querySelector("#chart"));


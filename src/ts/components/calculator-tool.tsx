import * as React from "react";

interface CalculatorToolProps {
    add: any;
    results: number;
}

interface CalculatorToolState {
    value: number;
}

export class CalculatorTool extends React.Component<CalculatorToolProps, CalculatorToolState> {

    constructor(props: CalculatorToolProps) {
        super(props);

        this.state = {
            value: 0,
        };
    }

    public onChange = (e: any) => {
        this.setState({
            value: Number(e.currentTarget.value),
        });
    }

    public onClick = () => {
        this.props.add(this.state.value);
    }

    public render() {

        return <div>
            <div>Result = {this.props.results}</div>
            <input type="text" value={this.state.value.toString()} onChange={this.onChange} />
            <button type="button" onClick={this.onClick}>Add</button>
        </div>;

    }

}

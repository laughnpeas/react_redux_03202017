import * as React from "react";

interface ColorToolProps {
    colors: string[];
}

interface ColorToolState {
    newColor: string;
}

export class ColorTool extends React.Component<ColorToolProps, ColorToolState> {

    constructor(props: ColorToolProps) {
        super(props);

        this.state = {
            newColor: "green",
        };

        this.onChange = this.onChange.bind(this);
    }

    public onChange(e: any) {
        this.setState({
            newColor: e.target.value,
        });
    }

    public render() {

        return <div>
            <h1>Color Tool</h1>
            <ul>
                {this.props.colors.map((color) => <li>{color}</li>)}
            </ul>
            <form>
                <label htmlFor="new-color-input">New Color:</label>
                <input type="text" id="new-color-input"
                    value={this.state.newColor} onChange={this.onChange} />
            </form>
        </div>;

    }

}
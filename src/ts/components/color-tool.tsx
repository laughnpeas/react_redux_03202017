import * as React from "react";

interface ColorToolProps {
    colors: string[];
}

interface ColorToolState {
    newColor?: string;
    colors?: string[];
}

interface FormControlEvent extends React.FormEvent {
    currentTarget: HTMLInputElement;
}

export class ColorTool extends React.Component<ColorToolProps, ColorToolState> {

    constructor(props: ColorToolProps) {
        super(props);

        this.state = {
            colors: this.props.colors.concat(),
            newColor: "",
        };

        this.onChange = this.onChange.bind(this);
    }

    public onChange(e: FormControlEvent) {
        this.setState({
            [ e.currentTarget.name ]: e.currentTarget.value,
        });
    }

    public onClick = () => {
        this.setState({
            colors: this.state.colors.concat(this.state.newColor),
            newColor: "",
        });
    }

    public render() {

        return <div>
            <h1>Color Tool</h1>
            <ul>
                {this.state.colors.map((color) => <li>{color}</li>)}
            </ul>
            <form>
                <label htmlFor="new-color-input">New Color:</label>
                <input type="text" id="new-color-input" name="newColor"
                    value={this.state.newColor} onChange={this.onChange} />
                <button type="button" onClick={this.onClick}>Add Color</button>
            </form>
        </div>;

    }

}
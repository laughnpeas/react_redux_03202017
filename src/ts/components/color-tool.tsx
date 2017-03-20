import * as React from "react";

interface ColorToolProps {
    colors: string[];
}

interface ColorToolState {
    newColor?: string;
    newMake?: string;
}

interface FormControlEvent extends React.FormEvent {
    currentTarget: HTMLInputElement;
}

export class ColorTool extends React.Component<ColorToolProps, ColorToolState> {

    constructor(props: ColorToolProps) {
        super(props);

        this.state = {
            newColor: "",
            newMake: "",
        };

        this.onChange = this.onChange.bind(this);
    }

    public onChange(e: FormControlEvent) {
        this.setState({
            [ e.currentTarget.name ]: e.currentTarget.value,
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
                <input type="text" id="new-color-input" name="newColor"
                    value={this.state.newColor} onChange={this.onChange} />
            </form>
        </div>;

    }

}
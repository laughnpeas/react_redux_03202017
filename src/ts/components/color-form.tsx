import * as React from "react";

import { FormControlEvent } from "../models/form-control-event";

interface ColorFormProps {
    newColorSubmitted: (newColor: string) => void;
}

interface ColorFormState {
    newColor?: string;
}

export class ColorForm extends React.Component<ColorFormProps, ColorFormState> {

    constructor(props: ColorFormProps) {
        super(props);

        this.state = {
            newColor: "",
        };
    }

    public onChange = (e: FormControlEvent) => {
        this.setState({
            [ e.currentTarget.name ]: e.currentTarget.value,
        });
    }

    public onClick = () => {

        this.props.newColorSubmitted(this.state.newColor);

        this.setState({
            newColor: "",
        });
    }

    public onKeyDown = (e: React.KeyboardEvent) => {

        if (e.keyCode === 13) {
            e.preventDefault();
            this.props.newColorSubmitted(this.state.newColor);
            this.setState({
                newColor: "",
            });
        }

    }

    public render() {
        return <form>
            <label htmlFor="new-color-input">New Color:</label>
            <input type="text" id="new-color-input" name="newColor"
                value={this.state.newColor} onChange={this.onChange} onKeyDown={this.onKeyDown} />
            <button type="button" onClick={this.onClick}>Add Color</button>
        </form>;
    }

}
import * as React from "react";

import { ToolHeader } from "./tool-header";
import { UnorderedList } from "./unordered-list";

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
        this.addColor();
    }

    public onKeyDown = (e: React.KeyboardEvent) => {

        if (e.keyCode === 13) {
            e.preventDefault();
            this.addColor();
        }

    }

    public render() {

        return <div>
            <ToolHeader headerText="Color Tool" />
            <UnorderedList items={this.state.colors} />
            <form>
                <label htmlFor="new-color-input">New Color:</label>
                <input type="text" id="new-color-input" name="newColor"
                    value={this.state.newColor} onChange={this.onChange} onKeyDown={this.onKeyDown} />
                <button type="button" onClick={this.onClick}>Add Color</button>
            </form>
        </div>;

    }

    private addColor() {
        this.setState({
            colors: this.state.colors.concat(this.state.newColor),
            newColor: "",
        });
    }

}
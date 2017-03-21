import * as React from "react";

import { ColorForm } from "./color-form";
import { ToolHeader } from "./tool-header";
import { UnorderedList } from "./unordered-list";

interface ColorToolProps {
    colors: string[];
}

interface ColorToolState {
    colors?: string[];
}

export class ColorTool extends React.Component<ColorToolProps, ColorToolState> {

    constructor(props: ColorToolProps) {
        super(props);

        this.state = {
            colors: this.props.colors.concat(),
        };
    }

    public render() {

        return <div>
            <ToolHeader headerText="Color Tool" />
            <UnorderedList items={this.state.colors} />
            <ColorForm newColorSubmitted={this.addColor} />
        </div>;

    }

    private addColor = (newColor: string) => {
        this.setState({
            colors: this.state.colors.concat(newColor),
        });
    }

}
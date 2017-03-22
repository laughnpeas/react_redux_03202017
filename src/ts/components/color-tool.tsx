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

        const otherHeader = "Color Tool!!!";

        return <div>
            <ToolHeader headerText="Color Tool"><u>{otherHeader}</u></ToolHeader>
            <UnorderedList items={this.state.colors} onDeleteItem={this.deleteColor} />
            <ColorForm newColorSubmitted={this.addColor} />
        </div>;

    }

    private addColor = (newColor: string) => {
        this.setState({
            colors: this.state.colors.concat(newColor),
        });
    }

    private deleteColor = (deleteColor: string) => {
        this.setState({
            colors: this.state.colors.filter((color) => color !== deleteColor)
        });
    }

}

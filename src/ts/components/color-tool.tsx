import * as React from "react";

interface ColorToolProps {
    colors: string[];
}

export class ColorTool extends React.Component<ColorToolProps, void> {

    public render() {

        console.log(this.props.colors);

        return <div>
            <h1>Color Tool</h1>
            <ul>
                {this.props.colors.map((color) => <li>{color}</li>)}
            </ul>
        </div>;

    }

}
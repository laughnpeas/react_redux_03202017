import * as React from "react";

interface ToolHeaderProps {
    headerText: string;
}

export class ToolHeader extends React.Component<ToolHeaderProps, void> {

    public render() {
        return <header>
            <h1>{this.props.children}</h1>
        </header>;
    }

}

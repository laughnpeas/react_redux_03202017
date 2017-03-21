import * as React from "react";

interface UnorderedListProps {
    items: string[];
}

export class UnorderedList extends React.Component<UnorderedListProps, void> {

    public render() {
        return <ul>
            {this.props.items.map((item) => <li>{item}</li>)}
        </ul>;
    }

}

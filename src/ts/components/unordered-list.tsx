import * as React from "react";

import { ViewListItem } from "./view-list-item";

interface UnorderedListProps {
    items: string[];
    onDeleteItem: (item: string) => void;
}

export class UnorderedList extends React.Component<UnorderedListProps, void> {

    public render() {
        return <ul>
            {this.props.items.map((item) =>
                <ViewListItem item={item} onDeleteItem={this.props.onDeleteItem} />)}
        </ul>;
    }

}

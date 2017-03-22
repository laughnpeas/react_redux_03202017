import * as React from "react";

interface ViewListItemProps {
    item: string;
    onDeleteItem: (item: string) => void;
}

export class ViewListItem extends React.Component<ViewListItemProps, void> {

    public render() {

        return <li>
            {this.props.item}
            <button type="button" onClick={() => this.props.onDeleteItem(this.props.item)}>Delete</button>
        </li>;
    }
}

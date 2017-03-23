import * as React from "react";
import * as ReactDOM from "react-dom";

interface ListItemProps {
    item: string;
}

let counter: number = 0;

interface ListItemState {
    item: string;
}

class ListItem extends React.Component<ListItemProps, ListItemState> {

    public counter: number;

    constructor(props: ListItemProps) {
        super(props);

        this.counter = ++counter;

        this.state = {
            item: this.props.item
        };

        console.log(`constructor ${this.counter} executed`);
    }

    public componentWillReceiveProps() {
        console.log(`new props being received ${this.counter}`);
    }

    public componentWillUnmount() {
        console.log(`component ${this.counter} unmounting`);
    }

    public render() {
        return <li className="col-md-2">{this.props.item}, {this.state.item}</li>;
    }
}

interface DemoFormState {
    items: string[];
}

class DemoForm extends React.Component<void, DemoFormState> {

    constructor() {
        super();

        this.state = {
            items: ["Item 1", "Item 2", "Item 3"],
        };
    }

    public componentDidMount() {

        setTimeout(() => {

            console.log("timeout expired");

            this.setState({
                items: this.state.items.slice(0, 1).concat(this.state.items.slice(2)),
            });

        }, 3000);

    }

    public render() {

        return <div>
            <ul>
                {this.state.items.map((item) => <ListItem key={item} item={item} />)}
            </ul>
        </div>;
    }
}

ReactDOM.render(<DemoForm />, document.querySelector("main"));

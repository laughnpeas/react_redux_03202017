import * as React from "react";
import * as ReactDOM from "react-dom";

interface DemoProps {

}

interface DemoState {
    counter: number;
}

class Demo extends React.Component<DemoProps, DemoState> {

    constructor(props: DemoProps) {
        super(props);

        this.state = {
            counter: 0,
        };
    }

    public componentDidMount() {
        //setInterval(() => {

            // const newCounter = this.state.counter + 1;

            // this.setState({
            //     counter: newCounter,
            // });

            // console.log("old", this.state.counter, "new", newCounter);

        //}, 1000);
    }

    public onClick = () => {

        let newCounter = this.state.counter + 1;

        this.setState({
            counter: newCounter,
        }, () => {
            console.log("ss completed");
            console.log("1 cb", "old", this.state.counter, "new", newCounter);
        });
        console.log("old", this.state.counter, "new", newCounter);

        const p = this.setState({
            counter: ++newCounter,
        }, () => {
            console.log("ss completed");
            console.log("2 cb", "old", this.state.counter, "new", newCounter);
        });

        console.dir(p);

    }

    public render() {
        console.log("render");
        return <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.onClick}>Click Me</button>
        </div>;
    }
}

ReactDOM.render(<Demo />, document.querySelector("main"));


import * as React from "react";
import * as ReactDOM from "react-dom";

interface P {
    counter: number;
}

class CompA extends React.Component<P, void> {

    public render() {

        // let b = 0;
        // if (this.props.counter < 4) {
        //     b = this.props.counter;
        // }

        return <div>
            CompA: {this.props.counter}
            <CompB counter={this.props.counter} />
        </div>;
    }

    public componentWillMount() {
        console.log('CompA will mount');
    }

    public componentDidMount() {
        console.log('CompA did mount');
    }

    public componentWillReceiveProps() {
        console.log('CompA will receive props');
    }

    public shouldComponentUpdate() {
        console.log('CompA should component update');
        return true;
    }

    public componentWillUnmount() {
        console.log('CompA will unmount');
    }

    public componentWillUpdate() {
        console.log('CompA will update');
    }

    public componentDidUpdate() {
        console.log('CompA did update');
    }

}

class CompB extends React.PureComponent<P, void> {

    public render() {
        return <div>
            CompB: {this.props.counter}
            {this.props.counter > 4 ? null : <CompC counter={this.props.counter} />}
        </div>;
    }

    public componentWillMount() {
        console.log('CompB will mount');
    }

    public componentDidMount() {
        console.log('CompB did mount');
    }

    public componentWillReceiveProps() {
        console.log('CompB will receive props');
    }

    public shouldComponentUpdate(nextProps: P, nextState: void) {
        console.log('CompB should component update');

        // console.log(this.props, nextProps);
        // console.log(this.state, nextState);

        return true;
    }

    public componentWillUnmount() {
        console.log('CompB will unmount');
    }


}

class CompC extends React.Component<P, void> {

    public render() {
        return <div>CompC: {this.props.counter}</div>;
    }

    public componentWillMount() {
        console.log('CompC will mount');
    }

    public componentDidMount() {
        console.log('CompC did mount');
    }

    public componentWillReceiveProps() {
        console.log('CompC will receive props');
    }

    public shouldComponentUpdate() {
        console.log('CompC should component update');
        return true;
    }

    public componentWillUnmount() {
        console.log('CompC will unmount');
    }

}

let counter = 0;

const h = setInterval(() => {
    ReactDOM.render(<CompA counter={counter++} />, document.querySelector("main"));

    if (counter > 6) {
        clearInterval(h);
    }

}, 2000);


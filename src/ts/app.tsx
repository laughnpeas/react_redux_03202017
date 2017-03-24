import * as React from "react";
import * as ReactDOM from "react-dom";



class VelocityDemoTool extends React.Component<void, {}> {

    private updateElement: HTMLElement;

    constructor(props: void) {
        super(props);

        this.state = {};
    }

    public componentDidMount() {

        setInterval(() => {
            console.log("interval fired");
            this.setState({});
        }, 5000);

        Velocity(this.updateElement, "slideDown", { duration: 1500 })
            .then(() => Velocity(this.updateElement, "slideUp", { duration: 1500 }));

    }

    public componentDidUpdate() {
        console.log("component updated");
        Velocity(this.updateElement, "slideDown", { duration: 1500 })
            .then(() => Velocity(this.updateElement, "slideUp", { duration: 1500 }));
    }

    public render(): React.ReactElement<null> {
        return <div>
            <aside ref={(asideElement) => this.updateElement = asideElement}>Updated</aside>
        </div>;
    }
}

ReactDOM.render(<VelocityDemoTool />, document.querySelector("main"));


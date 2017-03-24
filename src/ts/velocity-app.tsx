import * as React from "react";
import * as ReactDOM from "react-dom";

let moved = false;

interface S {
    asideIndex: number;
}

class VelocityDemoTool extends React.Component<void, S> {

    private updateElement: HTMLElement;

    constructor(props: void) {
        super(props);

        this.state = {
            asideIndex: 1,
        };
    }

    public componentDidMount() {

        setInterval(() => {
            console.log("interval fired");
            this.setState({
                asideIndex: this.state.asideIndex + 1,
            });
        }, 5000);

        Velocity(this.updateElement, "slideDown", { duration: 1500 })
            .then(() => Velocity(this.updateElement, "slideUp", { duration: 1500 }));

    }

    public componentDidUpdate() {
        console.log("component updated");
        Velocity(this.updateElement, "slideDown", { duration: 1500 })
            .then(() => Velocity(this.updateElement, "slideUp", { duration: 1500 }));

        if (!moved) {
            document.body.appendChild(this.updateElement);
            moved = true;
        }
    }

    public render(): React.ReactElement<null> {
        return <div>
            <aside id={this.state.asideIndex.toString()}
                ref={(asideElement) => this.updateElement = asideElement}>Updated</aside>
        </div>;
    }
}

setInterval(() => {
    ReactDOM.render(<VelocityDemoTool />, document.querySelector("main"));
}, 2000);


import * as React from "react";
import * as ReactDOM from "react-dom";

class Header extends React.Component<void, void> {

    public render() {

        const subTitle = "Header Component";

        return <header>
            <h1>{this.props.children}</h1>
            <h2>{subTitle}</h2>
        </header>;
    }

}

class DemoForm extends React.Component<void, void> {

    public render() {

        const subTitle = "DemoForm Component";

        return <div>
            <Header>{subTitle}</Header>
        </div>;
    }
}

ReactDOM.render(<DemoForm />, document.querySelector("main"));

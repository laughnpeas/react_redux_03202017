import "core-js";
import * as React from "react";
import * as ReactDOM from "react-dom";

export class HelloWorld extends React.Component<void, void> {
    public render() {
        return <h1>Hello World!</h1>;
    }
}

import "../scss/styles.scss";

ReactDOM.render(<HelloWorld />, document.querySelector("main"));

fetch("http://localhost:3010/widgets").then((res) => res.json()).then((results) => console.log(results));

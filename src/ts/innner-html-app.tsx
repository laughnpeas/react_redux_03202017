import * as React from "react";
import * as ReactDOM from "react-dom";

class Demo extends React.Component<void, void> {

    public render() {

        const message = "<b>Hola Mundo!</b>";

        return <span dangerouslySetInnerHTML={({ __html: message })}></span>;
    }
}

ReactDOM.render(<Demo />, document.querySelector("main"));


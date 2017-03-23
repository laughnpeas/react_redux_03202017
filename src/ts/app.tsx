import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { CalculatorToolContainer, store } from "./components/calculator-tool-container";

ReactDOM.render(<Provider store={store}>
    <CalculatorToolContainer />
</Provider>, document.querySelector("main"));


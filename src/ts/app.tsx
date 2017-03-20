import * as React from "react";
import * as ReactDOM from "react-dom";

import { ColorTool } from "./components/color-tool";

const colors = ["red", "white", "blue"];

ReactDOM.render(<ColorTool colors={colors} />, document.querySelector("main"));

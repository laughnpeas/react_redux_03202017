import * as React from "react";
import * as ReactDOM from "react-dom";

import { CarTool } from "./components/car-tool";
import { ColorTool } from "./components/color-tool";

const colors = ["red", "white", "blue"];

const cars = [
    { id: 1, make: "Ford", model: "Edge", year: 2016, color: "white", price: 42000 },
    { id: 2, make: "Ford", model: "Ranger", year: 2006, color: "white", price: 10000 },
    { id: 3, make: "Chevy", model: "Malibu", year: 2012, color: "blue", price: 32000 },
];

// ReactDOM.render(<ColorTool colors={colors} />, document.querySelector("main"));
ReactDOM.render(<CarTool baseUrl="http://localhost:5000" />, document.querySelector("main"));
import * as React from "react";

import { FormControlEvent } from "../models/form-control-event";

interface CarFormProps {
    onSaveCar: (car: any) => void;
}

interface CarFormState {
    make?: string;
    model?: string;
    year?: number;
    color?: string;
    price?: number;
}

export class CarForm extends React.Component<CarFormProps, CarFormState> {

    constructor(props: CarFormProps) {
        super(props);

        this.state = {
            make: "",
            model: "",
            year: 1900,
            color: "black",
            price: 0,
        };
    }

    public onChange = (e: FormControlEvent) => {
        this.setState({ [ e.currentTarget.name ]: e.currentTarget.value });
    }

    public onClick = () => {
        this.props.onSaveCar({
            make: this.state.make,
            model: this.state.model,
            year: this.state.year,
            color: this.state.color,
            price: this.state.price,
        });

        this.setState({
            make: "",
            model: "",
            year: 1900,
            color: "",
            price: 0,
        });
    }

    public render() {
        return <form>
            <div>
                <label htmlFor="car-make-input">Make:</label>
                <input type="text" id="car-make-input" name="make"
                    value={this.state.make} onChange={this.onChange} />
            </div>
            <div>
                <label htmlFor="car-model-input">Model:</label>
                <input type="text" id="car-model-input" name="model"
                    value={this.state.model} onChange={this.onChange} />
            </div>
            <div>
                <label htmlFor="car-year-input">Year:</label>
                <input type="text" id="car-year-input" name="year"
                    value={this.state.year.toString()} onChange={this.onChange} />
            </div>
            <div>
                <label htmlFor="car-color-input">Color:</label>
                <input type="text" id="car-color-input" name="color"
                    value={this.state.color} onChange={this.onChange} />
            </div>
            <div>
                <label htmlFor="car-price-input">Price:</label>
                <input type="text" id="car-price-input" name="price"
                    value={this.state.price.toString()} onChange={this.onChange} />
            </div>
            <button type="button" onClick={this.onClick}>Add Car</button>         
        </form>;
    }
}
import * as React from "react";

import { FormControlEvent } from "../models/form-control-event";

interface CarTableEditRowProps {
    car: any;
    onSaveCar: (car: any) => void;
    onCancelCar: () => void;
}

interface CarTableEditRowState {
    make?: string;
    model?: string;
    year?: number;
    color?: string;
    price?: number;
}

export class CarTableEditRow extends React.Component<CarTableEditRowProps, CarTableEditRowState> {

    constructor(props: CarTableEditRowProps) {
        super(props);

        // this.state = Object.assign({}, this.props.car);

        this.state = {
            make: this.props.car.make,
            model: this.props.car.model,
            year: this.props.car.year,
            color: this.props.car.color,
            price: this.props.car.price,
        };
    }

    public onChange = (e: FormControlEvent) => {
        this.setState({
            [ e.currentTarget.name ]: e.currentTarget.value,
        });



    }

    public onSaveCar = () => {
        this.props.onSaveCar(Object.assign({ id: this.props.car.id }, this.state));
    }

    public render() {

        return <tr>
            <td><input type="text" name="make" value={this.state.make} onChange={this.onChange} /></td>
            <td><input type="text" name="model" value={this.state.model} onChange={this.onChange} /></td>
            <td><input type="number" name="year" value={this.state.year.toString()} onChange={this.onChange} /></td>
            <td><input type="text" name="color" value={this.state.color} onChange={this.onChange} /></td>
            <td><input type="number" name="price" value={this.state.price.toString()} onChange={this.onChange} /></td>
            <td>
                <button type="button" onClick={this.onSaveCar}>Save</button>
                <button type="button" onClick={this.props.onCancelCar}>Cancel</button>
            </td>
        </tr>;
    }

}

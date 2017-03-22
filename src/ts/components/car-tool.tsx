import * as React from "react";

import { CarTable } from "./car-table";

interface CarToolProps {
    cars: any[];
}

interface CarToolState {
    cars: any[];
}

export class CarTool extends React.Component<CarToolProps, CarToolState> {

    constructor(props: CarToolProps) {
        super(props);

        this.state = {
            cars: this.props.cars.concat(),
        };
    }

    public render() {
        return <CarTable cars={this.state.cars} onDeleteCar={this.deleteCar} onSaveCar={this.saveCar} />;
    }

    private deleteCar = (carId: number) => {
        this.setState({
            cars: this.state.cars.filter((car) => car.id !== carId),
        });
    }

    private saveCar = (car: any) => {

        const carIndex = this.state.cars.findIndex((c) => c.id === car.id);

        // this.state.cars.slice(0, carIndex).concat(car).concat(this.state.cars.slice(0, carIndex));
        this.setState({
            cars: [ ...this.state.cars.slice(0, carIndex), car, ...this.state.cars.slice(carIndex + 1) ],
        });
    }
}



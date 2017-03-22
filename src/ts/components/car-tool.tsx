import * as React from "react";

import { CarForm } from "./car-form";
import { CarTable } from "./car-table";

interface CarToolProps {
    baseUrl: string;
}

interface CarToolState {
    cars: any[];
}

export class CarTool extends React.Component<CarToolProps, CarToolState> {

    constructor(props: CarToolProps) {
        super(props);

        this.state = {
            cars: [],
        };
    }

    public componentDidMount() {

        fetch(this.props.baseUrl + "/cars")
            .then((res) => res.json())
            .then((cars: any) => {
                this.setState({ cars });
            });

    }

    public render() {
        return <div>
            <CarTable cars={this.state.cars} onDeleteCar={this.deleteCar} onSaveCar={this.saveCar} />
            <CarForm onSaveCar={this.saveCar} />
        </div>;
    }

    private deleteCar = (carId: number) => {
        this.setState({
            cars: this.state.cars.filter((car) => car.id !== carId),
        });
    }

    private saveCar = (car: any) => {

        let cars = this.state.cars;
        let carsPromise: Promise<Response>;

        if (car.id) {
            // const carIndex = cars.findIndex((c) => c.id === car.id);
            // this.state.cars.slice(0, carIndex).concat(car).concat(this.state.cars.slice(0, carIndex));
            // cars = [ ...cars.slice(0, carIndex), car, ...cars.slice(carIndex + 1) ];

            carsPromise = fetch(this.props.baseUrl + "/cars/" + encodeURIComponent(car.id.toString()), {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(car),
            });

        } else {
            // car.id = cars.reduce((prev, current) => Math.max(prev.id, current.id)) + 1;
            // cars = cars.concat(car);

            carsPromise = fetch(this.props.baseUrl + "/cars", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(car),
            });

        }

        carsPromise
            .then(() => fetch(this.props.baseUrl + "/cars"))
            .then((res) => res.json())
            .then((cars: any) => {
                this.setState({ cars });
            });

        
    }
}



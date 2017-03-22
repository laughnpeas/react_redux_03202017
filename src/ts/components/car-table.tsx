import * as React from "react";

import { CarTableEditRow } from "./car-table-edit-row";
import { CarTableRow } from "./car-table-row";

interface CarTableProps {
    cars: any[];
    onDeleteCar: (carId: number) => void;
    onSaveCar: (car: any) => void;
}

interface CarTableState {
    editRowId: number;
}

export class CarTable extends React.Component<CarTableProps,  CarTableState> {

    constructor(props: CarTableProps) {
        super(props);

        this.state = {
            editRowId: -1,
        };

        this.onEditCar = this.onEditCar.bind(this);
    }

    public onEditCar(carId: number) {
        this.setState({
            editRowId: carId,
        });
    }

    public onCancelCar = () => {
        this.setState({
            editRowId: -1,
        });
    }

    public onSaveCar = (car: any) => {
        this.props.onSaveCar(car);
        this.setState({
            editRowId: -1,
        });
    }

    public render() {
        return <table>
            <thead>
                <tr>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {this.props.cars.map((car) =>
                    (this.state.editRowId === car.id) 
                        ? <CarTableEditRow car={car} onSaveCar={this.onSaveCar} onCancelCar={this.onCancelCar} />
                        : <CarTableRow car={car} onDeleteCar={this.props.onDeleteCar} onEditCar={this.onEditCar}  />)}
            </tbody>
        </table>;
    }

}

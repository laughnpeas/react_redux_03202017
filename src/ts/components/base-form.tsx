import * as React from "react";

import { FormControlEvent } from "../models/form-control-event";
import { FormState } from "../models/form-state";

export class BaseForm<T1, T2 extends FormState> extends React.Component<T1, T2> {

    public onChange = (e: FormControlEvent) => {

        let newState: FormState;

        switch (e.currentTarget.type) {
            case "checkbox":
                newState = { [ e.currentTarget.name ]: (e.currentTarget as HTMLInputElement).checked };
                break;
            case "range":
                newState = { [ e.currentTarget.name ]: Number(e.currentTarget.value) };
                break;
            case "number":
                newState = { [ e.currentTarget.name ]: Number(e.currentTarget.value) };
                break;
            case "date":

                const dateParts = e.currentTarget.value.split("-")
                    .map((part: string) => Number(part));

                // const theDate = new Date(...dateParts);
                const theDate = new Date(
                    dateParts[0],
                    dateParts[1] - 1,
                    dateParts[2],
                );

                newState = { [ e.currentTarget.name ]: theDate };
                break;
            default:

                if ((e.currentTarget as HTMLSelectElement).multiple) {

                    newState = {
                        [ e.currentTarget.name ]: Array.from((e.currentTarget as HTMLSelectElement).options)
                            .filter((option: HTMLOptionElement) =>
                                option.selected).map((option: HTMLOptionElement) =>
                                    option.value),
                    };

                } else {
                    newState = { [ e.currentTarget.name ]: e.currentTarget.value };
                }

                break;
        }

        this.setState(newState as T2);
    }

}
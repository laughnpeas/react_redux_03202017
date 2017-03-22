import * as React from "react";
import * as ReactDOM from "react-dom";

import { BaseForm } from "./components/base-form";
import { FormControlEvent } from "./models/form-control-event";
import { FormState } from "./models/form-state";

interface DemoFormProps {
    options: any[],
}

interface DemoFormState extends FormState {
    inputTextControl?: string;
    inputNumberControl?: number;
    inputDateControl?: Date;
    inputColorControl?: string;
    inputRangeControl?: number;
    inputCheckboxControl?: boolean;
    inputRadioControl?: string;
    textareaControl?: string;
    selectDropDownControl?: string;
    selectListBoxControl?: string;
    selectMultiSelectControl?: string[];
}

String.prototype.padStart = function(padLength, padChar) {
    const padLen = padLength - this.length;
    let str = this;
    if (padLen > 0) {
        for (let x = 0; x < padLen; x++) {
            str = padChar + str;
        }
    }
    return str;
};

class DemoForm extends BaseForm<DemoFormProps, DemoFormState> {

    constructor(props: DemoFormProps) {
        super(props);

        this.state = {
            inputTextControl: "",
            inputNumberControl: 0,
            inputDateControl: new Date(),
            inputColorControl: "#d21af3",
            inputRangeControl: 50,
            inputCheckboxControl: true,
            inputRadioControl: "2",
            textareaControl: "Matt Rocks!",
            selectDropDownControl: "",
            selectListBoxControl: "",
            selectMultiSelectControl: [ "item-1", "item-3" ],
        };
    }

    public render() {
        return <form>
            <div>
                <label htmlFor="input-text-control">Input Text Control:</label>
                <input type="text" id="input-text-control" name="inputTextControl"
                    value={this.state.inputTextControl} onChange={this.onChange} />
                <br />Value: {this.state.inputTextControl}, Type: {typeof this.state.inputTextControl}
            </div>
            <div>
                <label htmlFor="input-number-control">Input Number Control:</label>
                <input type="number" id="input-number-control" name="inputNumberControl"
                    value={this.state.inputNumberControl.toString()} onChange={this.onChange} />
                <br />Value: {this.state.inputNumberControl}, Type: {typeof this.state.inputNumberControl}
            </div>
            <div>
                <label htmlFor="input-date-control">Input Date Control:</label>
                <input type="date" id="input-date-control" name="inputDateControl"
                    value={this.getDateControlFormat(this.state.inputDateControl)} onChange={this.onChange} />
                <br />Value: {this.state.inputDateControl.toString()}, Type: {typeof this.state.inputDateControl}
            </div>
            <div>
                <label htmlFor="input-color-control">Input Color Control:</label>
                <input type="color" id="input-color-control" name="inputColorControl"
                    value={this.state.inputColorControl} onChange={this.onChange} />
                <br />Value: {this.state.inputColorControl.toString()}, Type: {typeof this.state.inputColorControl}
            </div>
            <div>
                <label htmlFor="input-range-control">Input Range Control:</label>
                <input type="range" id="input-range-control" name="inputRangeControl"
                    value={this.state.inputRangeControl.toString()} onChange={this.onChange} />
                <br />Value: {this.state.inputRangeControl.toString()}, Type: {typeof this.state.inputRangeControl}
            </div>
            <div>
                <label htmlFor="input-checkbox-control">Input Checkbox Control:</label>
                <input type="checkbox" id="input-checkbox-control" name="inputCheckboxControl"
                    checked={this.state.inputCheckboxControl} onChange={this.onChange} />
                <br />Value: {this.state.inputCheckboxControl ? "true" : "false"}, Type: {typeof this.state.inputCheckboxControl}
            </div>
            <fieldset>
                <legend>Tim</legend>
                <div>
                    <label htmlFor="input-radio-control-1">Input Radio Control 1:</label>
                    <input type="radio" id="input-radio-control-1" name="inputRadioControl"
                        checked={this.state.inputRadioControl === "1"} value="1" onChange={this.onChange} />
                </div>
                <div>
                    <label htmlFor="input-radio-control-2">Input Radio Control 2:</label>
                    <input type="radio" id="input-radio-control-2" name="inputRadioControl"
                        checked={this.state.inputRadioControl === "2"} value="2" onChange={this.onChange} />
                </div>
                <div>
                    <label htmlFor="input-radio-control-3">Input Radio Control 3:</label>
                    <input type="radio" id="input-radio-control-3" name="inputRadioControl"
                        checked={this.state.inputRadioControl === "3"} value="3" onChange={this.onChange} />
                </div>
                Value: {this.state.inputRadioControl}, Type: {typeof this.state.inputRadioControl}

            </fieldset>
            <div>
                <label htmlFor="textarea">Textarea:</label>
                <textarea id="textarea" name="textareaControl" value={this.state.textareaControl} onChange={this.onChange} />
                Value: {this.state.textareaControl}, Type: {typeof this.state.textareaControl}
            </div>
            <div>
                <label htmlFor="select-dropdown-control">Select Drop Down:</label>
                <select id="select-dropdown-control" name="selectDropDownControl"
                    value={this.state.selectDropDownControl} onChange={this.onChange}>
                    <option value="">Select One...</option>
                    {this.props.options.map(({ label, value }) => <option value={value}>{label}</option>)}
                </select>
                Value: {this.state.selectDropDownControl}, Type: {typeof this.state.selectDropDownControl}
            </div>
            <div>
                <label htmlFor="select-listbox-control">Select List Box:</label>
                <select id="select-listbox-control" name="selectListBoxControl" size={5}
                    value={this.state.selectListBoxControl} onChange={this.onChange}>
                    {this.props.options.map(({ label, value }) => <option value={value}>{label}</option>)}
                </select>
                Value: {this.state.selectListBoxControl}, Type: {typeof this.state.selectListBoxControl}
            </div>
            <div>
                <label htmlFor="select-multiselect-control">Select Multi Select:</label>
                <select id="select-multiselect-control" name="selectMultiSelectControl" size={5} multiple
                    value={this.state.selectMultiSelectControl} onChange={this.onChange}>
                    {this.props.options.map(({ label, value }) => <option value={value}>{label}</option>)}
                </select>
                Value: {this.state.selectMultiSelectControl}, Type: {typeof this.state.selectMultiSelectControl}
            </div>
        </form>;
    }

    private getDateControlFormat(theDate: Date) {

        return theDate.getFullYear() + "-" +
            String(theDate.getMonth() + 1).padStart(2, "0") + "-" +
            String(theDate.getDate()).padStart(2, "0");
    }
}

const options = [
    { label: "Item 1", value: "item-1" },
    { label: "Item 2", value: "item-2" },
    { label: "Item 3", value: "item-3" },
];

ReactDOM.render(<DemoForm options={options} />, document.querySelector("main"));

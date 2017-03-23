import * as React from "react";
import { connect, IMapDispatchToProps, IMapStateToProps, Provider } from "react-redux";
import { Action, bindActionCreators, createStore, Dispatch, Store  } from "redux";

import { CalculatorTool } from "./calculator-tool";

enum ActionTypes {
    Add, Subtract, Multiply, Divide,
}

interface AppState {
    value: number;
}

interface CalcAction extends Action {
    value: number;
}

const reducer = (state: AppState = { value: 0 }, action: CalcAction) => {
    switch (action.type) {
        case ActionTypes.Add:
            return Object.assign({}, state, { value: state.value + action.value });
        case ActionTypes.Subtract:
            return Object.assign({}, state, { value: state.value - action.value });
        case ActionTypes.Multiply:
            return Object.assign({}, state, { value: state.value * action.value });
        case ActionTypes.Divide:
            return Object.assign({}, state, { value: state.value / action.value });
        default:
            return state;
    }
};

export const store: Store<AppState> = createStore<AppState>(reducer);

store.subscribe(() => {
    console.log("new state", store.getState());
});

const addActionCreator: (value: number) => CalcAction = (value: number) =>
    ({ type: ActionTypes.Add, value });

const subtractActionCreator: (value: number) => CalcAction = (value: number) =>
    ({ type: ActionTypes.Subtract, value });

const multiplyActionCreator: (value: number) => CalcAction = (value: number) =>
    ({ type: ActionTypes.Multiply, value });

const divideActionCreator: (value: number) => CalcAction = (value: number) =>
    ({ type: ActionTypes.Divide, value });

const mapStateToPropsForCalculatorTool: IMapStateToProps = (state: AppState) => {
    return {
        results: state.value,
    };
};

const mapDispatchToPropsForCalculatorTool: IMapDispatchToProps = (dispatch: Dispatch<AppState>) => {
    return bindActionCreators({
        add: addActionCreator,
    }, dispatch);
};

// TODO: this is set to any because of TS issue
export const CalculatorToolContainer = connect(
    mapStateToPropsForCalculatorTool,
    mapDispatchToPropsForCalculatorTool,
)(CalculatorTool) as any;

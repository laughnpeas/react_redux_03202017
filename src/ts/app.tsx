import { createStore, bindActionCreators, Action, Store  } from "redux";

// const createStore = (reducer: any) => {

//     let state: any;
//     const cbFns: any[] = [];

//     return {
//         getState() {
//             return state;
//         },
//         dispatch(action: any) {
//             state = reducer(state, action);
//             cbFns.forEach((cb) => cb());
//         },
//         subscribe(cb: any) {
//             cbFns.push(cb);
//         },
//     };

// };

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

const store: Store<AppState> = createStore<AppState>(reducer);

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


// const bindActionCreators = (actionCreators: any, dispatchFn: any) => {

//     const actions = {};

//     Object.keys(actionCreators).forEach((key: any) => {
//         actions[key] = (...params: any[]) => {
//             dispatchFn(actionCreators[key](...params));
//         };
//     });

//     return actions;
// };

const { add, subtract, multiply, divide }: any = bindActionCreators({
    add: addActionCreator,
    subtract: subtractActionCreator,
    multiply: multiplyActionCreator,
    divide: divideActionCreator,
 } , store.dispatch);


add(1);
subtract(2);
add(3);
subtract(4);
add(5);
multiply(10);
divide(5);

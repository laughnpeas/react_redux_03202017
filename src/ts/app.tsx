const initialState = 0;

const createStore = (reducer: any) => {

    let state: any;
    const cbFns: any[] = [];

    return {
        getState() {
            return state;
        },
        dispatch(action: any) {
            state = reducer(state, action);
            cbFns.forEach((cb) => cb());
        },
        subscribe(cb: any) {
            cbFns.push(cb);
        },
    };

};

const reducer = (state: any = 0, action: any) => {

    console.log("state", state, "action", action);

    switch (action.type) {
        case "ADD":
            return state + action.value;
        case "SUBTRACT":
            return state - action.value;
        default:
            return state;
    }

};

const store = createStore(reducer);

store.subscribe(() => {
    console.log("new state", store.getState());
});

const addActionCreator = (value: any) =>
    ({ type: "ADD", value });

const subtractActionCreator = (value: any) =>
    ({ type: "SUBTRACT", value });


const bindActionCreators = (actionCreators: any, dispatchFn: any) => {

    const actions = {};

    Object.keys(actionCreators).forEach((key: any) => {
        actions[key] = (...params: any[]) => {
            dispatchFn(actionCreators[key](...params));
        };
    });

    return actions;
};

const { add, subtract }: any = bindActionCreators({
    add: addActionCreator,
    subtract: subtractActionCreator,
 } , store.dispatch);


add(1);
subtract(2);
add(3);
subtract(4);
add(5);

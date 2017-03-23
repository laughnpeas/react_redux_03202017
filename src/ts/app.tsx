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

store.dispatch({ type: "ADD", value: 1 });
store.dispatch({ type: "SUBTRACT", value: 2 });
store.dispatch({ type: "ADD", value: 3 });
store.dispatch({ type: "SUBTRACT", value: 4 });
store.dispatch({ type: "ADD", value: 5 });



import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "Increment") {
        return state + 1;
    }
    else if (action.type === "Decrement") {
        return state - 1;
    }
    else {
        return state;
    }
}

const UseReducerExample = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>{state}</p>
            <div>
                <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
                <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
            </div>
        </>
    )
};

export default UseReducerExample;
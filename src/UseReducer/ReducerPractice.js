import React, { useReducer } from "react";

const counter = {

}

const reducer = (state, action) => {
    switch (action.type) {
        case "TEST":
            return { count: state.count + 1, isToggle: !state.toggle }
            break;
        default:
            return state
            break;
    }
}

const PracticeReducer = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0, isToggle: false });


    const onClick = () => {
        dispatch({ type: "TEST" })
    }

    return (
        <React.Fragment>
            <h1>count : {state.count}</h1>
            <button onClick={onClick}>Increment</button>
            {state.isToggle && <p>Hello World</p>}
        </React.Fragment>
    )
}

export default PracticeReducer;
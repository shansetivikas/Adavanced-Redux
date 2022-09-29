import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store";


function Counter() {

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter);

    const toggleCounter = () => {
        dispatch(counterActions.toggle());
    }

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    }

    const increaseHandler = () => {
        dispatch(counterActions.increaseby5(5)); // {type: SOME_UNIQUE_IDENTIFIER, PAYLOAD:10}
    }

    return (
        <main>
            <h1>Redux Counter</h1>
            { show && <div>{counter}</div> }
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase By 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounter}>Toggle Counter</button>
        </main>
    )

}

export default Counter;
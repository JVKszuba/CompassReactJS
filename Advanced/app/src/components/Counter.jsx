import {useReducer} from "react";

const initialState = { counter: 0 };

function reducer(state, action) {

    switch(action.type) {

        case 'INCREMENT': return { counter: state.counter + 1 };
        case 'DECREMENT': return { counter: state.counter - 1 };
        case 'RESET': return { counter: 0 };
        default: throw new Error('Unknown action');
    }
}

function Counter() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
          <p>Counter: {state.counter}</p>
          <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
          <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
          <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
        </div>
    );
}

export default Counter;
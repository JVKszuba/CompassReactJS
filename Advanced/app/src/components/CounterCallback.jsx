import {useCallback, memo, useState} from 'react';

const Button = memo(({onClick, children}) => {

    return <button onClick = {onClick}>{children}</button>
})

function CounterCallback() {

    const [counter, setCounter] = useState(0)

    const increment = useCallback(() => {

        setCounter((prevCounter) => prevCounter + 1)

    }, [])

    return (
        <div>
          <p>Counter: {counter}</p>
          <Button onClick = {increment}>Increment</Button>
        </div>
    );
}

export default CounterCallback;
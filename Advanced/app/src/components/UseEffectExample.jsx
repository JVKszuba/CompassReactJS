import { useEffect, useState } from 'react';

function UseEffectExample() {

    const [counter, setCounter] = useState(0)

    useEffect(() => {

        document.title = `You clicked ${counter} ${counter === 1 ? 'time' : 'times'}`
    })

    return (
        <div>
          <p>You clicked {counter} {counter === 1 ? 'time' : 'times'}</p>
          <button onClick={() => setCounter(counter + 1)}>Click Here</button>
        </div>
    );
}

export default UseEffectExample;
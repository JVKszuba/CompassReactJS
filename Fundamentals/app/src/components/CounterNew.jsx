import { useState } from "react";

function CounterNew() {

    const [clicks, setClicks] = useState(0)

    const handleClick = () => setClicks(clicks + 1)

    return (
        <button onClick = {handleClick}>
            You clicked {clicks} {clicks === 1 ? "time" : "times"} in this button!
        </button>
    );
}

export default CounterNew;
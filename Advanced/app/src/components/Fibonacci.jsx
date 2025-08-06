import {useMemo} from "react";

const fibonacci = (n) => {

    if (n <= 1) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

const FibonacciCalculator = ({num}) => {

    const result = useMemo(() => fibonacci(num), [num]);

    return (
        <div>
            <p>Fibonacci of {num} is {result}</p>
        </div>
    );
}

function Fibonacci({num}) {

    return (
        <div>
          <FibonacciCalculator num={num} />
        </div>
    );
}

export default Fibonacci;
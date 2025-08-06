import {useMemo} from "react";

function HeavyCalculation() {

    const resultHeavyCalculation = useMemo(() => {

        return HeavyOperation(2)

    }, []);

    return (
        <div>
          <h2>Result: {resultHeavyCalculation} </h2>
        </div>
    );
}

const HeavyOperation = (num) => {

    console.log("Performing heavy operation...");

    return (num * 1000);
}

export default HeavyCalculation;
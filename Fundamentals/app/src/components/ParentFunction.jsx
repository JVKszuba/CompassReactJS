import ChildFunction from "./ChildFunction.jsx";

function ParentFunction() {

    const handleChildClick = () => {

        console.log("handleChildClick");
    }

    return (
        <div>
            <ChildFunction onClick = {handleChildClick} />
        </div>
    );
}

export default ParentFunction;
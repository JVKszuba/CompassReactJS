import {useContext} from "react";
import {MyContext} from "../contexts/MyContext.jsx";

function ContextValue() {

    const {message} = useContext(MyContext);

    return (
        <div>
          The value of context is: {message}
        </div>
    );
}

export default ContextValue;
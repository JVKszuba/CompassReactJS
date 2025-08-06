import {useContext} from "react";
import {MyContext} from "../contexts/MyContext.jsx";

function ChildComponent() {

    const {message, setMessage} = useContext(MyContext);

    return (
        <div>
          <button onClick={() => setMessage("New Message")}>New Message
              Alter message
          </button>
        </div>
    );
}

export default ChildComponent;
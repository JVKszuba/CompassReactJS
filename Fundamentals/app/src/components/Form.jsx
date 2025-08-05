import {useState} from 'react';

function Form() {

    const [value, setValue] = useState("");

    const onSubmit = (event) => {

        event.preventDefault();

        console.log("Form submitting ", value);
    }

    return (
        <form onSubmit={onSubmit}>
            <input type = "text" value = {value} onChange = {(e) => setValue(e.target.value)} placeholder = "Enter value" />
            <button type = "submit" >Submit</button>
        </form>
    );
}

export default Form;
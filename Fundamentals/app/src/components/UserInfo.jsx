import {useState} from 'react';

function UserInfo() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log(name, email)
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input type = "text" value = {name} onChange = {(e) => setName(e.target.value)} placeholder = "Type your name" />
            <input type = "text" value = {email} onChange = {(e) => setEmail(e.target.value)} placeholder = "Type your email" />
            <button type = "submit">Submit</button>
        </form>
    );
}

export default UserInfo;
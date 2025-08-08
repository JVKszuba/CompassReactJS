import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    const handleLogin = (event) => {

        event.preventDefault();

        console.log(`User ${username} logged in`);

        navigate('/');
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit = {handleLogin}>
                <input type = 'text'
                       value = {username}
                       onChange = {(e) => setUsername(e.target.value)}
                       placeholder = 'Username'
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
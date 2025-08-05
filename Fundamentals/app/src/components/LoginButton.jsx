function LoginButton({loggedIn}) {

    return (
        <div>
            {loggedIn ? <button>Logout</button> : <button>Login</button>}
        </div>
    );
}

export default LoginButton;
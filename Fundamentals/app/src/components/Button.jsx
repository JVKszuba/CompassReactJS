function Button() {

    const handleClick = () => {

        console.log("click");
    }

    return (
        <button onClick={handleClick}>
            Click Here!
        </button>
    );
}

export default Button;
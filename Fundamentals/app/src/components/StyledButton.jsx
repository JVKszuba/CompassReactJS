function StyledButton() {

    const buttonStyle = {

        backgroundColor: "#333",
        color: "#FFF",
        padding: "15px 32px",
        cursor: "pointer",
    }

    return (
        <button style={buttonStyle}>
            Click Here
        </button>
    );
}

export default StyledButton;
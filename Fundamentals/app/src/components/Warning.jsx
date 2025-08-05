function Warning({warning}) {

    if (!warning) return null

    return (
        <div>
            <strong>Warning!</strong>
        </div>
    );
}

export default Warning;
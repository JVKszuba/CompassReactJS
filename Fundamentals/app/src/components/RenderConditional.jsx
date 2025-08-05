function RenderConditional({user}) {

    return (
        <div>
            {user && <h2> Hello, {user}</h2> }
        </div>
    );
}

export default RenderConditional;
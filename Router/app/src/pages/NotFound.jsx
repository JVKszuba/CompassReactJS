import {Link} from "react-router-dom";

function NotFound() {

    return (
        <div>
            <h2>404</h2>
            <p>Page not found</p>
            <Link to = "/">Back to home</Link>
        </div>
    );
}

export default NotFound;
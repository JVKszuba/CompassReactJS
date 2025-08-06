import useOnlineStatus from "../hooks/useOnlineStatus.js";

function UserStatus() {

    const status = useOnlineStatus()

    return (
        <div>
          <p>You are {status ? 'online' : 'offline'}</p>
        </div>
    );
}

export default UserStatus;
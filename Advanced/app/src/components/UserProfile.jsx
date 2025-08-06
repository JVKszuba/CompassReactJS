import {useState, useEffect} from "react";

function UserProfile({userId}) {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const searchUser = async () => {

            const response = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);

            const userData = await response.json();

            setUser(userData);
        }

        if (userId) searchUser().catch(console.error);

    }, [userId]);

    return (
        <div>
          {user ? (
              <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
          ) : (
              <div>
                <p>Loading user profile...</p>
              </div>
          )}
        </div>
    );
}

export default UserProfile;
import {useEffect} from 'react';

const UserInfo = ({userInfo}) => {

    useEffect(() => {

        document.title = `${userInfo.name} Page`;

    }, [userInfo]);

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{userInfo.name}</td>
                <td>{userInfo.email}</td>
            </tr>
            </tbody>
        </table>
    )
}

function Synchronized({userInfo}) {

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <UserInfo userInfo = {userInfo} />
        </div>
    );
}

export default Synchronized;
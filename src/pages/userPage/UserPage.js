import React, {useState} from 'react';
import UserList from "../../components/userList/UserList";

function UserPage(props) {

    const [users, setUsers] = useState([])

    const getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
    }




    return (
        <>
            <h1>user List</h1>
            <button onClick={getUsers}>get users</button>
            <UserList usersList={users}/>
        </>
    );
}

export default UserPage;
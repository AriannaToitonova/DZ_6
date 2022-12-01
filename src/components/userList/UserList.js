import React, {useState} from 'react';

function UserList({usersList}) {
    const [info,setInfo] = useState({})


    const getOneUserInfo = (e) => {
        // console.log(e.target.dataset.id)
        const id = e.target.dataset.id
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data  => setInfo({
                id : data.id,
                phone : data.phone,
                email : data.email,
                website : data.website
            }));
    }

    // console.log(usersList)
    return (
        <ul>
            <p>id: {info.id}</p>
            <p>phone: {info.phone}</p>
            <p>email:{info.email}</p>
            <p>website: {info.website}</p>
            <p>>--------------></p>
            {
                usersList.map(user =>
                    <li key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <button data-id={user.id} onClick={getOneUserInfo}>get info</button>
                        <p>-----------</p>
                    </li>
                )
            }
        </ul>
    );
}

export default UserList;
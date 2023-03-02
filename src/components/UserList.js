import React from "react";
import User from "./User";

const UserList =({users}) =>{
    return(
        users.map(user=>{
            return <User name={user.name} status={user.status} method={undefined} key={user.id}/>

        })
    )
}

export default UserList;
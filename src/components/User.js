import React from 'react';
const User = ({name, status, method}) => {
    return(
        <div className="card">
            <h1>Name: {name}</h1>
            <h2>Status: <span className={status}> {status}</span> </h2>
            <button onClick={method}>Change Status</button>

        </div>
    )
}

export default User;

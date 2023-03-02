import React from 'react';
const User = ({name, status, method}) => { // props nesnesi icerisindeki objeleri bu sekilde verip kullanabiliriz
    return(
        <div className="card">
            <div className="card-body bg-light mb-3">
                <button className="btn btn-sm btn-outline-danger" onClick={method} style={{position:"absolute", right:"15px"}}>Delete</button>
                <h2 className="card-title">Name: {name}</h2>
                <h3 className="card-subtitle">Status: <span className={status}> {status}</span> </h3>
            </div>
        </div>
    )
}

export default User;

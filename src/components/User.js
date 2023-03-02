import React from 'react';
const User = ({user, delMethod, stateChange}) => { // props nesnesi icerisindeki objeleri bu sekilde verip kullanabiliriz
    const changeHandler= (e) =>{
        console.log(e.target.value, user.id)
        stateChange({status:e.target.value, id:user.id})

    }
    return(
        <div className="card">
            <div className="card-body bg-light mb-3">
                <button className="btn btn-sm btn-outline-danger" onClick={delMethod} style={{position:"absolute", right:"15px"}}>Delete</button>
                <h2 className="card-title">Name: {user.name}</h2>
                <h3 className="card-subtitle mb-1">Status: <span className={user.status}> {user.status}</span> </h3>
                <select className="form-control" name="state" id="state" onChange={changeHandler} value={user.status}>
                    <option value="online">online</option>
                    <option value="offline">offline</option>
                    <option value="busy">busy</option>

                </select>
            </div>
        </div>
    )
}

export default User;

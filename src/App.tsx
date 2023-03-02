import React from 'react';
import './App.css';
import UserList from './components/UserList'
import AddUser from './components/AddUser'
import user from "./components/User";

function ConsoleLog() {
    console.log('from App Module')
    
}
class App extends React.Component{
    state={
        idx:4,
        users: [
            {name: "Ilayda", status: "online", id:1},
            {name: "Ahmet Can", status: "offline", id:2},
            {name: "Ayse", status: "busy", id:3}
        ]
    }

    statusChangeHandler=(data: any)=>{
        let tUsers = this.state.users.map(user =>{
            if (user.id === data.id){
                user.status = data.status
            }
            return user;
            })
        this.setState({
            users: tUsers
        })
    }

    deleteMethod = (id:any) =>{
        console.log(id);
        let tUsers = this.state.users.filter(user =>{
            return user.id !== id
        })
        this.setState({
            users: tUsers // users, tUsers a atanir
        })
    }
    addMethod = (name:any) =>{
        console.log('In App Module', name)
        let id = this.state.idx;
        let user ={
            name: name,
            status: 'online',
            id:id
        }
        let tUsers = [...this.state.users, user]
        this.setState({
            users:tUsers,
            idx: id + 1
            }
        )
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <UserList users={this.state.users} delMethod={this.deleteMethod} stateChange={this.statusChangeHandler}/>
                        <hr/>
                        <AddUser addMethod={this.addMethod}/>
                    </div>
                </div>

            </div>
        );
    }

}

export default App;

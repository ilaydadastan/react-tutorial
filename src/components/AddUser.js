import React from "react";

class AddUser extends React.Component{
    state ={
        name: ''
    }
    submitHandler = (e) =>{
        e.preventDefault(); // varsayilan eylemi iptal ediyor, yani sayfa yenilenmesini engelliyoruz
        this.props.addMethod(this.state.name);
        this.setState({
            name:''
        })

    }
    changeHandler = (e) =>{
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input className="form-control mb-2" type="text" id="name" onChange={this.changeHandler}
                       value={this.state.name} placeholder={"Please enter username"}/>
                <button className="btn btn-outline-success btn-block">Save</button>
            </form>
        );
    }
}

export default AddUser;

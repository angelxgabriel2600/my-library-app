import React, { Component } from 'react';
import axios from 'axios';

class ListUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
      }
    
      getLoans() {
        axios.get('/api/v3/loans')
        .then(response => {
          this.setState({loans: response.data})
        })
        .catch(error => console.log(error))
      }
    
      componentDidMount() {
        this.getLoans()
      }

    render() {
        return (
        <div>
        <div style={style.paper}>
        <Typography component="h1" variant="h5">
            View all User's 
        </Typography>
        </div> 
        <div className="inputContainer">
          <input className="userInput" type="text"  
            variant="contained"  color="primary"
            placeholder="Add a User" maxLength="50"
            onKeyPress={this.createUser} />
        </div>  	    
	<div className="listWrapper">
	   <ul className="userList">
		  {this.state.users.map((user) => {
		    return(
		    <li className="library" user={user} key={user.id}>
			<input className="libLabel" type="text" readOnly>{user.name}</input>             
			<input className="libLabel" type="text" readOnly>{user.lastname}</input> 
            <input className="libLabel" type="text" readOnly>{user.email}</input>             
			<input className="libLabel" type="text" readOnly>{user.role}</input>           
			<span className="updateBtn">          
            <input className="userInput" type="text"  
            variant="contained"  color="primary"
            placeholder="Modify" maxLength="50"
            onKeyPress={this.updateUser} />
            </span>
		      </li>
		    )       
		  })} 	    
	   </ul>
	</div>
     
            </div>
        );
    }
}

export default ListLoan;
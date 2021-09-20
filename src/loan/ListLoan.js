import React, { Component } from 'react';
import axios from 'axios';

class ListLoan extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loans: []
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
            View all Book's Borrowed
        </Typography>
        </div>  
        <div className="inputContainer">
          <input className="loanInput" type="text"  
            variant="contained"  color="primary"
            placeholder="Add a Loan" maxLength="50"
            onKeyPress={this.createLoan} />
        </div>  	    
	<div className="listWrapper">
	   <ul className="loanList">
		  {this.state.loans.map((loan) => {
		    return(
		    <li className="library" loan={loan} key={loan.id}>
			<input className="libLabel" type="text" readOnly>{loan.iduser}</input>             
			<input className="libLabel" type="text" readOnly>{loan.idbook}</input> 
            <input className="libLabel" type="text" readOnly>{loan.username}</input>             
			<input className="libLabel" type="text" readOnly>{loan.bookname}</input>           
			<span className="updateBtn">            
            <input className="userInput" type="text"  
            variant="contained"  color="primary"
            placeholder="Modify" maxLength="50"
            onKeyPress={this.updateLoan} />
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
import React, { Component } from 'react';
import axios from 'axios';

class ListBook extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
      }
    
      getBooks() {
        axios.get('/api/v1/books')
        .then(response => {
          this.setState({books: response.data})
        })
        .catch(error => console.log(error))
      }
    
      componentDidMount() {
        this.getBooks()
      }

    render() {
        return (
        <div>
        <div style={style.paper}>
        <Typography component="h1" variant="h5">
            View all Book's Library
        </Typography>
        </div> 
        <div className="inputContainer">
          <input className="bookInput" type="text"  
            variant="contained"  color="primary"
            placeholder="Add a Book" maxLength="50"
            onKeyPress={this.createBook} />
        </div>  	    
	<div className="listWrapper">
	   <ul className="bookList">
		  {this.state.books.map((book) => {
		    return(
		  <li className="library" book={book} key={book.id}>
			<input className="libLabel" type="text" readOnly>{book.title}</input>             
			<input className="libLabel" type="text" readOnly>{book.autor}</input> 
      <input className="libLabel" type="text" readOnly>{book.genre}</input>             
			<input className="libLabel" type="text" readOnly>{book.stock}</input> 
      <input className="libLabel" type="text" readOnly>{book.year}</input>            
			<span className="updateBtn">            
      <input className="userInput" type="text"  
            variant="contained"  color="primary"
            placeholder="Modify" maxLength="50"
            onKeyPress={this.updateBook} />
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

export default ListBook;
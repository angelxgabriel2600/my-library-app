import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import LockOutLineIcon from "@material-ui/icons/LockOutlined";
import update from 'immutability-helper';
import axios from 'axios';
const style = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 8,
    backgroundColor: "#e53935",
  },
  form: {
    marginTop: 10,
    width: "100%",
  },
  submit: {
    marginTop: 15,
    marginBottom: 20,
  },
};
class UpdBook extends Component {
  state = {
    book: {
      id: "",
      title: "",
      autor: "",
      genre: "",
      stock: "",
      year: "",
    },
  };

  onChange = (e) => {
    let book = Object.assign({}, this.state.book);
    book[e.target.name] = e.target.value;
    this.setState({
      book:book
    });
  };

  updBook = (e,id) => {
    //book[e.target.name] = e.target.value;
    //e.preventDefault();
    console.log('this.state.book',this.state.book);//Imprime this.state.book

    //Modify
    axios.put(`/api/v1/books/${id}`, {book: {title: e.target.value}})
    .then(response => {
      const bookIndex = this.state.books.findIndex(x => x.id === response.data.id)
      const books = update(this.state.books, {
        [bookIndex]: {$set: response.data}
      })
      this.setState({
        books: books
      })
    })
    .catch(error => console.log(error))      
  }

  };

  render() {
    return (
      <Container maxWidth="md">
        <div style={style.paper}>
          <Avatar style={style.avatar}>
            <LockOutLineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Modify Book
          </Typography>
          <form style={style.form}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  name="id"
                  onChange={this.onChange}
                  value={this.state.book.id}
                  fullWidth
                  label="Id:" readOnly
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="title"
                  onChange={this.onChange}
                  value={this.state.book.title}
                  fullWidth
                  label="Title:"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="autor"
                  onChange={this.onChange}
                  value={this.state.book.autor}
                  fullWidth
                  label="Autor:"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="genre"
                  onChange={this.onChange}
                  value={this.state.book.genre}
                  fullWidth
                  label="Genre:"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="stock"
                  onChange={this.onChange}
                  value={this.state.book.stock}
                  fullWidth
                  label="Stock:"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="year"
                  onChange={this.onChange}
                  value={this.state.book.year}
                  fullWidth
                  label="Year:"
                />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item md={6} xs={12}>
                <Button
                  type="submit"
                  variant="container"
                  fullWidth
                  size="large"
                  color="secondary"
                  style={style.submit}
                  onClick={this.updBook(e, book.id)}
                  
                >
                  Update Book
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default UpdBook;

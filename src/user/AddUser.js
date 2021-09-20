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
class AddUser extends Component {
  state = {
    user: {
      title: "",
      autor: "",
      genre: "",
      stock: "",
      year: "",
    },
  };

  onChange = (e) => {
    let user = Object.assign({}, this.state.user);
    user[e.target.name] = e.target.value;
    this.setState({
      user:user
    });
  };

  addUser = (e) => {
    //user[e.target.name] = e.target.value;
    //e.preventDefault();
    console.log('this.state.user',this.state.user);//Imprime this.state.user
    //Add
    if (e.key === 'Enter') {
    axios.post('/api/v2/users', {user: {name: e.target.value}})
    .then(response => {
      const users = update(this.state.users, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({
        users: users
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
            Add New User
          </Typography>
          <form style={style.form}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  name="title"
                  onChange={this.onChange}
                  value={this.state.user.title}
                  fullWidth
                  label="Title:"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="autor"
                  onChange={this.onChange}
                  value={this.state.user.autor}
                  fullWidth
                  label="Autor:"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="genre"
                  onChange={this.onChange}
                  value={this.state.user.genre}
                  fullWidth
                  label="Genre:"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="stock"
                  onChange={this.onChange}
                  value={this.state.user.stock}
                  fullWidth
                  label="Stock:"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="year"
                  onChange={this.onChange}
                  value={this.state.user.year}
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
                  onClick={this.addUser}
                  
                >
                  Add User
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default AddUser;

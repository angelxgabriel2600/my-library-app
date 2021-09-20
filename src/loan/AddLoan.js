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
class  AddLoan extends Component {
  state = {
    loan: {
      iduser: "",
      idbook: "",
      username: "",
      bookname: "",
    },
  };

  onChange = (e) => {
    let loan = Object.assign({}, this.state.loan);
    loan[e.target.name] = e.target.value;
    this.setState({
      loan:loan
    });
  };

  addLoan = (e) => {
    //loan[e.target.name] = e.target.value;
    //e.preventDefault();
    console.log('this.state.loan',this.state.loan);//Imprime this.state.loan
    //Add
    if (e.key === 'Enter') {
    axios.post('/api/v3/loans', {loan: {username: e.target.value}})
    .then(response => {
      const loans = update(this.state.loans, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({
        loans: loans
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
            Registre su cuenta
          </Typography>
          <form style={style.form}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  name="iduser"
                  onChange={this.onChange}
                  value={this.state.loan.iduser}
                  fullWidth
                  label="Id user:"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="idbook"
                  onChange={this.onChange}
                  value={this.state.loan.idbook}
                  fullWidth
                  label="id book:"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="username"
                  onChange={this.onChange}
                  value={this.state.loan.username}
                  fullWidth
                  label="User's name:"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="bookname"
                  onChange={this.onChange}
                  value={this.state.loan.bookname}
                  fullWidth
                  label="Book's name:"
                />
              </Grid>
ç
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
                  onClick={this.addLoan}
                  
                >
                  Add Loan
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default AddLoan;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <MuiThemeProvider theme={theme}>
      <AppNavBar/>
      <Grid container>
        <Switch>
          <Route path="/" exact component={ListBook}>
          </Route>
          <Route path="/auth/listUser" exact component={ListUser}>
          </Route>
          <Route path="/auth/listLoan" exact component={ListLoan}>
          </Route>
        </Switch>
      </Grid>
      
    </MuiThemeProvider>
  </Router>
  );
}

export default App;

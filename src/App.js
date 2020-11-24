import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Cart from "./components/cart";
import Home from "./components/home";
import { AppBar, makeStyles, Typography, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  menu: {
      display: 'flex',
      justifyContent: 'space-between'
  },
  title: {
    textDecoration: 'none',
    color: 'white',
    display: 'block'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
    <AppBar position="static">
      <Toolbar className={classes.menu}>
        <Typography variant="h6"><Link to={"/"} className={classes.title}>Home</Link></Typography>
        <Typography variant="h6"><Link to={"/cart"} className={classes.title}>My Cart</Link></Typography>
      </Toolbar>
    </AppBar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

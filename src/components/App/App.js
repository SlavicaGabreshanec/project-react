import React, { Component } from 'react';
import Home from "../otherComponents/Home";
import Org from "../otherComponents/Organizations";
import Story from "../otherComponents/Stories";
import Login from "../otherComponents/Login";
import Logout from "../otherComponents/Logout";
//import Navigacija from "../otherComponents/Navigation";
import logo from '../otherComponents/logo.png';
//import search from '../otherComponents/search.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
//import Card from "../otherComponents/Card";
//import data from "../otherComponents/data/data';
import {HashRouter,BrowserRouter as Router,Route } from 'react-router-dom';
import MakingStory from "../otherComponents/MakingStory";
import Register from "../otherComponents/Register";
import ForUs from "../otherComponents/ForUs";



class App extends Component {

    render(){

        return (
        <Router>

            <Route path={"/home"} component={Home}/>
            <Route path={"/organizations"} component={Org}/>
            <Route path={"/stories"} component={Story}/>
            <Route path={"/login"} exact component={Login}/>
            <Route path={"/makingStory"} component={MakingStory}/>
            <Route path={"/register"} component={Register}/>
            <Route path={"/forUs"} component={ForUs}/>
        </Router>
    );
  }

}

export default App;

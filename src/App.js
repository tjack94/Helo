import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from "./components/Form/Form"
import Nav from './components/Nav/Nav'
import Post from './components/Post/Post'
import Auth from './components/Auth/Auth'
import Routes from './route'

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
// const nav = this.props.location.pathname === '/' ? "" : 
    return (
      <div className="App">

    <Route component={Nav} />
    <Routes/>
      </div>
    );
  }
}

export default App;

import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Navbar,Nav } from 'react-bootstrap'
//components
import Login from './components/Login'
import UserList from './components/UserList';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="#home">React-App</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Sign Up</Nav.Link>
            <Nav.Link href="#" >Users</Nav.Link>
          </Nav>
   
  </Navbar.Collapse>
</Navbar>
         <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/users' component={UserList} />

            </Switch>
         </BrowserRouter>
      </div>
    );
  }
 
}

export default App;

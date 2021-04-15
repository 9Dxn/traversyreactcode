import React, {Component } from "react";
import './App.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
class App extends Component{
    foo = () => 'Have a good time!';

    render(){

        return (
            <div className='App'>
                <Navbar iconProp='fab fa-github'/>
                <div className='container'><Users/></div>

            </div>
        );
    }
}

export default App;

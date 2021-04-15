import React, {Component } from "react";
import './App.css';
import Navbar from "./layout/Navbar";

class App extends Component{
    foo = () => 'Have a good time!';

    render(){
        const name = "John Doe";
        const booler = true;
        const showName = true;

        return (
            <div className='App'>
                <Navbar iconProp='fab fa-github'/>
                {!booler ? <h4>booling</h4> :
                    <h1>Herrooo {!showName && name.toUpperCase()}</h1>
                }
                <h2>Bye byeee foo</h2>
            </div>
        );
    }
}

export default App;

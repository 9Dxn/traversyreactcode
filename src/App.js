import React, {Component, Fragment} from "react";
import './App.css';

class App extends Component{
    foo = () => 'Have a good time!';

    render(){
        const name = "John Doe";
        const booler = true;
        const showName = true;

        return (
            <div className='App'>
                {!booler ? <h4>booling</h4> :
                    <h1>Herrooo {!showName && name.toUpperCase()}</h1>
                }
                <h2>Bye byeee foo</h2>
            </div>
        );
    }
}

export default App;

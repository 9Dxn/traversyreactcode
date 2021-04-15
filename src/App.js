import React, {Component} from "react";
import './App.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";

class App extends Component {
    state = {
        users: [],
        loading: false
    }

    async componentDidMount() {
        const apiID = process.env.REACT_APP_GITHUB_CLIENT_ID
        const apiSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
        const requestString = 'https://api.github.com/users?client_id=' + apiID + '&client_secret=' + apiSecret

        console.log(requestString)

        this.setState({loading: true})
        const res = await axios.get(requestString);
        this.setState({users: res.data, loading: false});

        console.log(res.data)
    }

    render() {

        return (
            <div className='App'>
                <Navbar iconProp='fab fa-github'/>
                <div className='container'>
                    <Users loading={this.state.loading} users={this.state.users}/>
                </div>

            </div>
        );
    }
}

export default App;

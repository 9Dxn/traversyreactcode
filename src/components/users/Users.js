import React, {Component} from "react";
import UserItem from "./UserItem";

class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'eenie',
                avatar_url: 'imahttps://th.bing.com/th/id/OIP.wxcvrOn64c-3AAh9xXU3uAHaC8?pid=ImgDet&rs=1ge',
                html_url: 'https://github.com/eenie'
            },
            {
                id: '2',
                login: 'meenie',
                avatar_url: 'imahttps://th.bing.com/th/id/OIP.wxcvrOn64c-3AAh9xXU3uAHaC8?pid=ImgDet&rs=1ge',
                html_url: 'https://github.com/meenie'
            },
            {
                id: '3',
                login: 'manie',
                avatar_url: 'imahttps://th.bing.com/th/id/OIP.wxcvrOn64c-3AAh9xXU3uAHaC8?pid=ImgDet&rs=1ge',
                html_url: 'https://github.com/manie'
            },

        ]
    }

    render() {

        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        );
    }
}

const userStyle ={
    display : 'grid',
    gridTemplateColumns : 'repeat(3, 1fr)',
    gridGap: '0.5rem'
}

export default Users
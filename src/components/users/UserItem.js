import React, {Component} from "react";

class UserItem extends Component {
    state = {
            id: 'id',
            login: 'userId',
            avatar_url: 'imahttps://th.bing.com/th/id/OIP.wxcvrOn64c-3AAh9xXU3uAHaC8?pid=ImgDet&rs=1ge',
            html_url: 'https://github.com/userId'
        }


    render() {
        const {login, avatar_url, html_url} = this.props.user;
        return <div className='card text-center'>
            <img
                src={avatar_url}
                alt=""
                className='round-img'
                style={{width : '60px'}}
            />
            <h3>{login}</h3>
            <div>
                <a href={html_url} className='btn btn-dark btn-sm my-1'>
                    More
                </a>
            </div>
        </div>
    }
}

export default UserItem;
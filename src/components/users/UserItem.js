import React, {Component} from "react";

class UserItem extends Component {
    state = {
            id: 'id',
            login: 'userId',
            avatar_url: 'imahttps://th.bing.com/th/id/OIP.wxcvrOn64c-3AAh9xXU3uAHaC8?pid=ImgDet&rs=1ge',
            html_url: 'https://github.com/userId'
        }


    render() {
        return <div className='card text-center'>
            <img
                src={this.state.avatar_url}
                alt=""
                className='round-img'
                style={{width : '60px'}}
            />
            <h3>{this.state.login}</h3>

            <div>
                <a href={this.state.html_url} className='btn btn-dark btn-sm my-1'>
                    More
                </a>
            </div>
        </div>
    }
}

export default UserItem;
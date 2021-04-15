import React, {Component} from "react";
import PropTypes from 'prop-types';

export class Navbar extends Component {
    static defaultProps = {
        title: 'Github finder',
        iconProp: 'fab fa-github'
    };
    static propTypes = {
        title: PropTypes.string.isRequired,
        iconProp: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1><i className={this.props.iconProp}/>{this.props.title}</h1>
            </nav>
        )
    }
}

export default Navbar
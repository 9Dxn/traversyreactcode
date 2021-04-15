import PropTypes from 'prop-types';

const Navbar = ({iconProp, title}) => {
        return (
            <nav className='navbar bg-primary'>
                <h1><i className={iconProp}/>{title}</h1>
            </nav>
        )
}

Navbar.defaultProps = {
    title: 'Github finder',
    iconProp: 'fab fa-github'
};
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    iconProp: PropTypes.string.isRequired
}



export default Navbar
import React from 'react'
import './Nav.css'
import Logo from '../Logo/Logo'
import PropTypes from 'prop-types'

const Nav = (props) => {
    const navbarClasses = props.userHasSearched ? 'navbar' : 'navbar-hide'
    return (
        <div className={navbarClasses}>
            <Logo logoSizeIsSmall={props.userHasSearched} />
        </div>
    )
}

Nav.propTypes = {
    userHasSearched: PropTypes.bool.isRequired
}

export default Nav

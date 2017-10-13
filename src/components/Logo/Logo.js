import React from 'react'
import './Logo.css'
import PropTypes from 'prop-types'

import logo from '../../assets/LogoLarge.png'

class Logo extends React.Component {
    render() {
        const logoContainerClasses = this.props.logoSizeIsSmall
            ? 'logo-container-small'
            : 'logo-container'
        const imageContainerClasses = this.props.logoSizeIsSmall
            ? 'image-container-small'
            : 'image-container'
        const logoImageClasses = this.props.logoSizeIsSmall
            ? 'logo-image-small'
            : 'logo-image'
        const nameContainerClasses = this.props.logoSizeIsSmall
            ? 'name-container-small'
            : 'name-container'
        return (
            <div className={logoContainerClasses}>
                <div className={imageContainerClasses}>
                    <img src={logo} alt="Logo" className={logoImageClasses} />
                </div>
                <div className={nameContainerClasses}><h2>Health Inspector</h2></div>
            </div>
        )
    }
}

Logo.propTypes = {
    logoSizeIsSmall: PropTypes.bool.isRequired
}

export default Logo

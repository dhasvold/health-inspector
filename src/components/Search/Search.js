import React from 'react'
import './Search.css'
import Logo from '../Logo/Logo'
import SearchBar from './SearchBar'
import PropTypes from 'prop-types'

class Search extends React.Component {
    constructor() {
        super()

        this.state = {
            shrink: false
        }
    }

    setShrink = (shrink) => {
        this.setState({ shrink })
    }

    render() {
        const classes = !this.state.shrink
            ? 'search-container'
            : 'search-container search-container-small'
        const logoContainerClasses = this.props.logoSizeIsSmall && 'search-logo-container-hide'
        return (
            <div className={classes}>
                <div className={logoContainerClasses}>
                    <Logo logoSizeIsSmall={this.props.logoSizeIsSmall} />
                </div>
                <SearchBar
                    resetSearch={this.props.resetSearch}
                    updateSearchTerm={this.props.updateSearchTerm}
                    setShrink={this.setShrink}
                    changeFilter={this.props.changeFilter}
                    filter={this.props.filter}
                />
            </div>
        )
    }
}
Search.propTypes = {
    logoSizeIsSmall: PropTypes.bool.isRequired,
    updateSearchTerm: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired,
}
export default Search

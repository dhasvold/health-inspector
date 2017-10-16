import React from 'react'
import 'font-awesome/css/font-awesome.css'
import './SearchBar.css'
import PropTypes from 'prop-types'

class SearchBar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            search: '',
            searched: false,
            isListSelected: true
        }
    }

    handleSearchChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({searched: true})
        this.props.setShrink(true)
        this.props.updateSearchTerm(this.state.search)
    }

    handleReset = (e) => {
        e.preventDefault()
        this.setState({ search: '', searched: false })
        this.props.setShrink(false)
        this.props.resetSearch()
    }

    showList = () => {
        this.setState({isListSelected: true})
        this.context.router.history.push('/')
    }

    showMap = () => {
        this.setState({isListSelected: false})
        this.context.router.history.push('/map/')
    }


    render() {
        const mapButtonClasses = this.state.isListSelected ? 'map-button red' : 'map-button white'
        const listButtonClasses = this.state.isListSelected ? 'list-button white' : 'list-button red'
        return (
            <div className="searchbar-container">
                <form className="search-form">
                    <input
                        type="search"
                        name="search"
                        value={this.state.search}
                        className="search-input"
                        placeholder="Search Restaurants"
                        onChange={this.handleSearchChange}
                    />
                    <button
                        type="submit"
                        className="search-button"
                        onClick={this.handleSubmit}
                    >
                        <i className="search-icon fa fa-search" />
                    </button>
                    <button className="reset-button" onClick={this.handleReset}>
                        <i className="fa fa-repeat" />
                    </button>
                </form>
                <div className="toggle-container">
                    <button className={listButtonClasses} onClick={this.showList}>
                        <i className="fa fa-list" aria-hidden="true" />
                    </button>
                    <button className={mapButtonClasses} onClick={this.showMap}>
                        <i className="fa fa-map-marker" aria-hidden="true" />
                    </button>
                </div>
            </div>
        )
    }
}

PropTypes.PropTypes = {
    updateSearchTerm: PropTypes.func.isRequired,
    setShrink: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired,

}

SearchBar.contextTypes = {
    router: React.PropTypes.object
}

export default SearchBar
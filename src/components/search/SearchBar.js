import React from 'react'
import './SearchBar.css'
import 'font-awesome/css/font-awesome.css'
import PropTypes from 'prop-types'

class SearchBar extends React.Component {

    constructor() {
        super()

        this.state = {
            search: ''
        }
    }

    handleSearchChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateSearchTerm(this.state.search)
    }

    render() {

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
                        onClick={this.handleSubmit}
                        className="search-button"
                    >
                        <i className="search-icon fa fa-search" />
                    </button>
                </form>
            </div>
        )
    }
}

PropTypes.PropTypes = {
    updateSearchTerm: PropTypes.func.isRequired
}

export default SearchBar
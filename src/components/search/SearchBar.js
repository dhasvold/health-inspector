import React from 'react'
import './SearchBar.css'

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

export default SearchBar
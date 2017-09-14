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
            <div>
                <input
                    type="search"
                    name="search"
                    value={this.state.search}
                    className="search-input"
                    placeholder="Search Restaurants"
                    onChange={this.handleSearchChange}
                />
            </div>
        )
    }
}

export default SearchBar
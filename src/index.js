import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import SearchBar from './components/search/SearchBar'

class Inspector extends React.Component {

    constructor() {
        super()

        this.state = {
            results: [],
            loading: false,
            searched: false,
            mapScriptLoaded: false,
            filter: 'All'
        }
        this.getSearchData = this.getSearchData.bind(this)
    }

    updateSearchTerm = (searchTerm) => {
        // TODO: call api for data
        console.log(`We are searching for ${searchTerm}`)
        this.getSearchData(searchTerm)
    }

    getSearchData = async (searchTerm) => {
        console.log(this.state.filter)
    }

    render() {

        return(
            <div>
                <SearchBar
                    updateSearchTerm={this.updateSearchTerm}
                />
            </div>
        )
    }
}

ReactDOM.render(<Inspector />, document.getElementById('root'));
registerServiceWorker();

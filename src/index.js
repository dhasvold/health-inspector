import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import SearchBar from './components/search/SearchBar'

class Inspector extends React.Component {
    constructor(props) {
        super()

        this.state = {
            loading: false,
            searchResults: []
        }
    }

    updateSearchTerm = (searchTerm) => {
        // TODO: call api for data
        console.log(`We are searching for ${searchTerm}`)
        this.getSearchData(searchTerm).then((data) => {
            this.setState({
                loading: false,
                searchResults: data
            })
        }).catch((e) => {
            console.log(e.message)
        })
    }

    getSearchData = async (searchTerm) => {
        this.setState({ loading: true })
        let response
        try {
            response = await fetch(`https://data.cityofchicago.org/resource/cwig-ma7x.json?$query=SELECT * where Contains(upper(dba_name), upper("${searchTerm}")) or Contains(upper(aka_name), upper("${searchTerm}"))`)
            if (!response.ok) {
                throw Error('Bad Request')
            }
        } catch (e) {
            throw e
        }
        let data
        try {
            data = await response.json()
        } catch (e) {
            throw e
        }
        return data
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

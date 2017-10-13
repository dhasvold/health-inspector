import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Search from './components/Search/Search'
import Nav from './components/Nav/Nav'

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            searched: false,
        }
    }

    updateSearchTerm = (searchTerm) => {
        console.log(`We are searching for ${searchTerm}`)
        this.getSearchData(searchTerm).then((data) => {
            console.log(data)
            this.setState({
                searched: true
            })

        })
    }

    resetSearch = () => {
        this.setState({
            results: [],
            loading: false,
            searched: false
        })
    }

    getSearchData = async (searchTerm) => {
        let response
        try {
            response = await fetch(`https://data.cityofchicago.org/resource/cwig-ma7x.json?$query=SELECT * where Contains(upper(dba_name), upper("${searchTerm}")) or Contains(upper(aka_name), upper("${searchTerm}"))`)
        } catch (e) {
            console.log(e)
        }
        let data
        try {
            data = await response.json()
        } catch (e) {
            console.log(e)
        }
        return data
    }

    render () {
        return (
            <div>
                <Nav
                    userHasSearched={this.state.searched} />
                <Search
                    logoSizeIsSmall={this.state.searched}
                    updateSearchTerm={this.updateSearchTerm}
                    resetSearch={this.resetSearch}
                    changeFilter={this.changeFilter}
                    filter={this.state.filter} />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
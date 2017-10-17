import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Search from './components/Search/Search'
import Nav from './components/Nav/Nav'
import ResultsList from './components/ResultsList/ResultsList'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            searched: false,
            results: [],
            loading: false,
            filter: 'All'
        }
    }

    updateSearchTerm = (searchTerm) => {
        if (searchTerm.length === 0) {
            return null
        } else {
            this.setState({loading: true})
            this.getSearchData(searchTerm).then((data) => {
            this.setState({
                searched: true,
                loading: false,
                results: data

            })
         })
        }
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
            <Router>
                <div>
                    <Nav
                        userHasSearched={this.state.searched} />
                    <Search
                        logoSizeIsSmall={this.state.searched}
                        updateSearchTerm={this.updateSearchTerm}
                        resetSearch={this.resetSearch}
                        changeFilter={this.changeFilter}
                        filter={this.state.filter} />
                    <Route exact path="/" render={() => (
                        <ResultsList
                            loading={this.state.loading}
                            searched={this.state.searched}
                            results={this.state.results}

                        />
                    )} />
                    <Route path="/map/" render={() => (
                        <h1>Map</h1>
                    )} />
                </div>
            </Router>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
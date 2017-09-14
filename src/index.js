import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import SearchBar from './components/search/SearchBar'

class Inspector extends React.Component {

    updateSearchTerm = (searchTerm) => {
        // TODO: call api for data
        console.log(`We are searching for ${searchTerm}`)
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

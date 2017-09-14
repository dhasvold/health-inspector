import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import SearchBar from './components/search/SearchBar'

class Inspector extends React.Component {

    render() {

        return(
            <div>
                <SearchBar />
            </div>
        )
    }
}

ReactDOM.render(<Inspector />, document.getElementById('root'));
registerServiceWorker();

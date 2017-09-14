import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class Inspector extends React.Component {

    render() {

        return(
            <h1>Hello World!</h1>
        )
    }
}

ReactDOM.render(<Inspector />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class Inspector extends React.Component {

    render() {

        return(
            <div>
                <h1>Hello World!</h1>
                <p>It's good to have you here</p>
            </div>
        )
    }
}

ReactDOM.render(<Inspector />, document.getElementById('root'));
registerServiceWorker();

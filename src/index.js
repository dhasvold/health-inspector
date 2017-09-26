import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <p>Welcome to our app</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

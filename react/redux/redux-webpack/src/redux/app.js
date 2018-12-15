import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './todo';

const store = createStore(reducer)

const App = () => {
    return <div>hello</div>
}

render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root')
)
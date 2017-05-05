/**
 *
 *
 * */
'use strict';

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import App from './App';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

var Root = React.createClass({
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
});

module.exports = Root;
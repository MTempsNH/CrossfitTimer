/**
 *
 *
 * */
'use strict';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './App';

const store = createStore(reducer);

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
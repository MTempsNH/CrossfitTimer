/**
 *
 *
 * */
'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import CrossfitTimer from './containers/CrossfitTimer';

var App = React.createClass({
    render() {
        return (
            <CrossfitTimer />
        );
    }
});

module.exports = App;
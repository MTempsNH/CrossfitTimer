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

import CrossfitTimer from 'CrossfitTimer';
//import { CrossfitTimer } from './CrossfitTimer.js';
console.log("CFT: ", CrossfitTimer);

function init(): ReactClass<{}> {
    class Root extends React.Component {
        render() {
            return (
                <CrossfitTimer />
            );
        }
    }

    return Root;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = init;
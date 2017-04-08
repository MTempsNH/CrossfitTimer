/**
 *
 *
 *
 * */
var React = require('React');
// import { Component } from 'react';

import {
    StyleSheet,
    Text,
    TextInput,
    Slider,
    View
} from 'react-native';

var CrossfitTimer = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Crossfit Timer
                </Text>
                <Slider />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                />
            </View>
        );
    }
});

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

module.exports = CrossfitTimer;


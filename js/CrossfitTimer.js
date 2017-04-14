/**
 *
 *
 *
 * */
var React = require('React');
// import { Component } from 'react';

import {
    StyleSheet,
    TabBarIOS,
    Text,
    TextInput,
    Slider,
    View
} from 'react-native';

var CrossfitTimer = React.createClass({
    render() {
        return (
                <TabBarIOS unselectedTintColor="yellow"
                           tintColor="white"
                           unselectedItemTintColor="red"
                           barTintColor="darkslateblue">
                    <TabBarIOS.Item
                        title="Blue Tab"
                        systemIcon="most-viewed"
                        selected={false}>
                        <View style={[styles.tabContent]}>
                            <Text style={styles.tabText}>tab1</Text>
                            <Text style={styles.tabText}>test</Text>
                        </View>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        systemIcon="history"
                        badgeColor="black"
                        title="Black"
                        selected={false}>
                        <View style={[styles.tabContent]}>
                            <Text style={styles.tabText}>tab1</Text>
                            <Text style={styles.tabText}>test</Text>
                        </View>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        systemIcon="recents"
                        renderAsOriginal
                        title="More"
                        selected={false}>
                        <View style={[styles.tabContent]}>
                            <Text style={styles.tabText}>tab1</Text>
                            <Text style={styles.tabText}>test</Text>
                        </View>
                    </TabBarIOS.Item>
                </TabBarIOS>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5848FF',
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
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});

module.exports = CrossfitTimer;


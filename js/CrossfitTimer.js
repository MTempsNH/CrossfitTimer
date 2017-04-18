/**
 *
 *
 *
 * */
var React = require('React');
import TabNav from './TabNav';

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
            <View style={[styles.container]}>
                <Text>
                    Welcome to the awesomeness Crossfit Timer
                </Text>
                <TabNav />
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#5848FF',
    },
});

module.exports = CrossfitTimer;


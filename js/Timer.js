/**
 *
 *
 *
 * */
var React = require('React');
import { PropTypes } from 'react';
import TabNav from './TabNav';

import {
    StyleSheet,
    TabBarIOS,
    Text,
    TextInput,
    Slider,
    View
} from 'react-native';
import Button from './Button';

const Timer = ( props ) => {
    const { onControlTimer } = props;

    return (
        <View style={[styles.container]}>
            <Text>
                Welcome to the awesomeness Crossfit Timer
            </Text>
            <Button
                onPress={onControlTimer}
                title="Control Timer">
            </Button>
            <TabNav />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#5848FF',
    },
});

Timer.propTypes = {
    onControlTimer: PropTypes.func.isRequired
};

module.exports = Timer;

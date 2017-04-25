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
    const { onBeginTimer, onStopTimer } = props;
    console.log('PROPS: ', props);

    return (
        <View style={[styles.container]}>
            <Text>
                Welcome to the awesomeness Crossfit Timer
            </Text>
            <Button
                onPress={onBeginTimer}
                title="BEGIN">
            </Button>
            <Text>
                ---
            </Text>
            <Button
                onPress={onStopTimer}
                title="STOP">
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
    onBeginTimer : PropTypes.func.isRequired,
    onStopTimer : PropTypes.func.isRequired
};

module.exports = Timer;

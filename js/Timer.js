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
    const { inMotion, onBeginTimer, onStopTimer } = props;
    console.log('PROPS: ', props);

    /**
     * Determine which buttons should be displayed to the user based upon whether the timer is in motion.
     * @returns {XML}
     */
    renderButtonState = () => {
        if(!inMotion){
            return (
                <Button
                    onPress={onBeginTimer}
                    title="BEGIN">
                </Button>
            )
        }else{
            return(
                <Button
                    onPress={onStopTimer}
                    title="STOP">
                </Button>
            )
        }
    }

    return (
        <View style={[styles.container]}>
            <Text>
                Welcome to the awesomeness Crossfit Timer
            </Text>
            {this.renderButtonState()}
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

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
    renderButtonState = (timerInMotion) => {
        if(timerInMotion){
            return(
                <Button
                    onPress={onStopTimer}
                    title="STOP">
                </Button>
            )
        }else{
            return (
                <Button
                    onPress={onBeginTimer}
                    title="BEGIN">
                </Button>
            )
        }
    }

    return (
        <View style={[styles.container]}>
            <View style={[styles.mainContent]}>
                <Text>
                    Welcome to the awesomeness Crossfit Timer
                </Text>
            </View>
            <View style={[styles.subContent]}>
                {this.renderButtonState(inMotion)}
            </View>
            <TabNav />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#5848FF',
        paddingTop: 20
    },
    mainContent: {
        height: '33%',
        backgroundColor: '#83DB0D'
    },
    subContent:{
        height: '66%',
        backgroundColor: '#CDF214'
    }
});

Timer.propTypes = {
    onBeginTimer : PropTypes.func.isRequired,
    onStopTimer : PropTypes.func.isRequired
};

module.exports = Timer;

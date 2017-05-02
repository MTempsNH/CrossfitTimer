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
import Display from './Display';

const Timer = ( props ) => {
    const { inMotion, onBeginTimer, onStopTimer } = props;
    console.log('PROPS: ', props);

    let style1, style2;


    if(inMotion){
        style1 = styles.mainContent;
        style2 = styles.subContent;
    }else{
        style1 = styles.subContent;
        style2 = styles.mainContent;
    }

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
            <View style={[style1, {backgroundColor: '#83DB0D'}]}>
                <Display />
            </View>
            <View style={[style2, styles.centeredContainer, {backgroundColor: '#CDF214'}]}>
                {this.renderButtonState(inMotion)}
            </View>
            <TabNav />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#5848FF',
        paddingTop: 20
    },
    mainContent: {
        height: '40%',
        width: '100%'
    },
    subContent:{
        height: '60%',
        width: '100%'
    },
    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});

Timer.propTypes = {
    onBeginTimer : PropTypes.func.isRequired,
    onStopTimer : PropTypes.func.isRequired
};

module.exports = Timer;

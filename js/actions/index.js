/**
 * Created by n0204620 on 4/21/17.
 */

// Types
const BEGIN_TIMER = 'BEGIN_TIMER';
const STOP_TIMER = 'STOP_TIMER';
const UPDATE_TIMER = 'UPDATE_TIMER';

import {
    LayoutAnimation
} from 'react-native';

let timerReq;

/**
 * Control the timer functionality
 */


// Creators
export const beginTimer = () => (dispatch) => {
    // console.log('b inMotion: ', inMotion);
    // Trigger view animation
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

    const computeTime = (timestamp) => {
        console.log("STAMP: ", timestamp);
        dispatch(updateTime(timestamp));
        timerReq = window.requestAnimationFrame(computeTime);
    };

    timerReq = window.requestAnimationFrame(computeTime);

    dispatch({
        type : BEGIN_TIMER
    });
};

export const stopTimer = (inMotion) => {
    console.log('s inMotion');
    // Trigger view animation
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

    cancelAnimationFrame(timerReq);

    return {
        type : STOP_TIMER
    }
};

export const updateTime = (moment) => {
    return {
        type : UPDATE_TIMER,
        moment
    }
};
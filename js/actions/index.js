/**
 * Created by n0204620 on 4/21/17.
 */

// Types
const BEGIN_TIMER = 'BEGIN_TIMER';
const STOP_TIMER = 'STOP_TIMER';
const RUNNING_TIMER = 'RUNNING_TIMER';

import {
    LayoutAnimation
} from 'react-native';

// Creators
export const beginTimer = () => {
    // console.log('b inMotion: ', inMotion);
    // Trigger view animation
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

    return {
        type : BEGIN_TIMER
    }
};

export const stopTimer = (inMotion) => {
    console.log('s inMotion');
    // Trigger view animation
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

    return {
        type : STOP_TIMER
    }
};

export const runningTimer = () => {

    return {
        type : RUNNING_TIMER
    }
};
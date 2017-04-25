/**
 * Created by n0204620 on 4/21/17.
 */

// Types
const BEGIN_TIMER = 'BEGIN_TIMER';
const STOP_TIMER = 'STOP_TIMER';

// Creators
export const beginTimer = (inMotion) => {
    console.log('b inMotion');
    return {
        type : BEGIN_TIMER,
        inMotion
    }
};

export const stopTimer = (inMotion) => {
    console.log('s inMotion');
    return {
        type : STOP_TIMER,
        inMotion
    }
};
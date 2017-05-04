/**
 * Created by n0204620 on 4/19/17.
 */
const RUNNING_TIMER = "RUNNING_TIMER";
const START_TIMER = "START_TIMER";
const STOP_TIMER = "STOP_TIMER";

export default crossfitTimer = (state = {}, action) => {

    console.log('enter reducer: ', action);

    switch(action.type){
        case 'BEGIN_TIMER':
            return {
                ...state,
                startTime : Date.now(),
                phase : START_TIMER
            };

        case 'STOP_TIMER':
            return {
                ...state,
                stopTime : Date.now(),
                phase : STOP_TIMER
            };

        case 'RUNNING_TIMER':
            console.log('RUNNING_TIMER ', action.value);
            return {
                ...state,
                phase : RUNNING_TIMER
            };

        default:
            return state
    }
};
/**
 * Created by n0204620 on 4/19/17.
 */
const UPDATE_TIMER = "UPDATE_TIMER";
const START_TIMER = "START_TIMER";
const STOP_TIMER = "STOP_TIMER";

export default crossfitTimer = (state = {}, action) => {

    console.log('enter reducer: ', action);

    switch(action.type){
        case 'BEGIN_TIMER':
            return {
                ...state,
                inMotion : true
            };

        case 'STOP_TIMER':
            return {
                ...state,
                inMotion : false
            };

        case 'UPDATE_TIMER':
            console.log('UPDATE_TIMER ', action.moment);
            return {
                ...state,
                runningTime : action.moment
            };

        default:
            return state
    }
};
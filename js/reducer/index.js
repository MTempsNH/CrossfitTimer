/**
 * Created by n0204620 on 4/19/17.
 */
const UPDATE_TIMER = "UPDATE_TIMER";
const START_TIMER = "START_TIMER";
const STOP_TIMER = "STOP_TIMER";

const getTimeSpan = (elapsed) => { // 754567(ms) -> "12:34.567"
    let m = String(Math.floor(elapsed/1000/60)+100).substring(1);
    let s = String(Math.floor((elapsed%(1000*60))/1000)+100).substring(1);
    let ms = String(elapsed % 1000 + 1000).substring(1);
    return m+":"+s+"."+ms;
};

export default crossfitTimer = (state = {}, action) => {

    console.log('enter reducer: ', action);

    switch(action.type){
        case 'BEGIN_TIMER':
            return {
                ...state,
                startTime : Date.now(),
                inMotion : true
            };

        case 'STOP_TIMER':
            return {
                ...state,
                endTime : Date.now(),
                inMotion : false
            };

        case 'UPDATE_TIMER':
            console.log('UPDATE_TIMER ', action.moment);
            const now = action.moment;
            const then = action.startTime;

            const elapsed = getTimeSpan(now - then);

            return {
                ...state,
                runningTime : elapsed
            };

        default:
            return state
    }
};
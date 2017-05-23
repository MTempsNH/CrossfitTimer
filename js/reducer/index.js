/**
 * Created by n0204620 on 4/19/17.
 */
const UPDATE_TIMER = "UPDATE_TIMER";
const START_TIMER = "START_TIMER";
const STOP_TIMER = "STOP_TIMER";

let elapsedTime = null;

/**
 * Inspired by:
 * https://gist.github.com/knjcode/9081842644bc0b49a180
 *
 * todo: trim to only 2 ms digits
 * @param elapsed
 * @returns {string}
 */
const getTimeSpan = (elapsed) => {
    let m = String(Math.floor(elapsed/1000/60)+100).substring(1);
    let s = String(Math.floor((elapsed%(1000*60))/1000)+100).substring(1);
    let ms = String(elapsed % 1000 + 1000).slice(1,3);

    // store the elapsed time for restart scenarios
    // elapsedTime = elapsed;

    return m+":"+s+"."+ms;
};

export default crossfitTimer = (state = {}, action) => {

    console.log('Date.now(): ', Date.now());
    console.log('state.span: ', state.span);
    console.log('state.span + Date.now(): ', state.span + Date.now());

    switch(action.type){
        case 'BEGIN_TIMER':
            return {
                ...state,
                startTime : state.span ? (Date.now() + state.span) : Date.now(),
                inMotion : true
            };

        case 'STOP_TIMER':
            return {
                ...state,
                endTime : Date.now(),
                inMotion : false
            };

        case 'RESET_TIMER':
            return {
                ...state,
                runningTime: '00:00.00',
                span : null
            };

        case 'UPDATE_TIMER':
            console.log('UPDATE_TIMER ', action.moment);
            const now = action.moment;
            const then = action.startTime;
            const span = now - then;

            const elapsed = getTimeSpan(span);

            return {
                ...state,
                runningTime : elapsed,
                span : span
            };

        default:
            return state
    }
};
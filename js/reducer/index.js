/**
 * Created by n0204620 on 4/19/17.
 */

export default crossfitTimer = (state = {}, action) => {

    switch(action.type){
        case 'BEGIN_TIMER':
            return {
                ...state,
                inMotion : true
            }

        case 'STOP_TIMER':
            return {
                ...state,
                inMotion : false
            }

        default:
            return state
    }
};
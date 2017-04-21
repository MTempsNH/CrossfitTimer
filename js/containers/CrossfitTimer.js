/**
 *
 *
 *
 * */
var React = require('React');
import { connect } from 'react-redux';
import { beginTimer, stopTimer } from '../actions';
import Timer from '../Timer';

const onControlTimer = (inMotion) => {
    console.log("inMotion: ", inMotion);
    if(inMotion) {
        dispatch(beginTimer(true))
    }else{
        dispatch(stopTimer(false))
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onControlTimer : beginTimer
    }
};

const CrossfitTimer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer);

module.exports = CrossfitTimer;

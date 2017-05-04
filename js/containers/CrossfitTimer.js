/**
 *
 *
 *
 * */
var React = require('React');
import { connect } from 'react-redux';
import { beginTimer, stopTimer, runningTimer } from '../actions';
import Timer from '../Timer';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
    onBeginTimer : beginTimer,
    onStopTimer : stopTimer,
    onRunningTimer : runningTimer
};

const CrossfitTimer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer);

module.exports = CrossfitTimer;

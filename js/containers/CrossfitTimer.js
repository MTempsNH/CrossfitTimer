/**
 *
 *
 *
 * */
var React = require('React');
import { connect } from 'react-redux';
import { beginTimer, resetTimer, stopTimer } from '../actions';
import Timer from '../Timer';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
    onBeginTimer : beginTimer,
    onResetTimer : resetTimer,
    onStopTimer : stopTimer
};

const CrossfitTimer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer);

module.exports = CrossfitTimer;

/**
 * Created by n0204620 on 4/19/17.
 */

var assert = require('assert');
import reducer from '../js/reducer';

describe('Reducer', function(){
    describe('a stop / start event', function(){
        it('should be in motion when began', function() {
            assert.equal(true, reducer({}, {
                type:'BEGIN_TIMER'
            }).inMotion);
        })
        it('should not be in motion when stopped', function() {
            assert.equal(false, reducer({}, {
                type:'STOP_TIMER'
            }).inMotion);
        })
    })
});
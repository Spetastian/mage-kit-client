import {fromJS} from 'immutable'
import spellsReducer from '../../../app/redux/reducers/spells-reducer'
import should from 'should'
import {
    FETCH_SPELLS_STARTED,
    FETCH_SPELLS_SUCCESS,
    FETCH_SPELLS_FAILURE,
} from '../../../app/redux/actions/action-types'

describe('spells reducer tests:', function() {

  describe('reducer receives the fetch started action:', function(){
    const currentState = fromJS({
        fetching: false,
        ready: false,
        fail: false,
        result: []
    })

    const result = spellsReducer(currentState, {type: FETCH_SPELLS_STARTED}).toJS()

    it('fetching field in resulting state should be true', function (){
      result.fetching.should.be.true()
    })

    it('fail field in resulting state should be false', function (){
      result.fail.should.be.false()
    })

    it('spell list in resulting state should be empty', function (){
      result.result.should.be.empty()
    })
  })

  describe('reducer receives the fetch success action:', function(){
    const currentState = fromJS({
        fetching: true,
        ready: false,
        fail: false,
        result: []
    })

    const result = spellsReducer(currentState, {type: FETCH_SPELLS_SUCCESS, result: [{},{}] }).toJS()

    it('fetching field in resulting state should be false', function (){
      result.fetching.should.be.false()
    })

    it('fail field in resulting state should be false', function (){
      result.fail.should.be.false()
    })

    it('spell result in resulting state should contain the result', function (){
      result.result.should.be.instanceof(Array)
    })
  })

  describe('reducer receives the fetch failure action:', function(){
      const currentState = fromJS({
          fetching: true,
          ready: false,
          fail: false,
          result: []
      })

      const result = spellsReducer(currentState, {type: FETCH_SPELLS_FAILURE}).toJS()

    it('fetching field in resulting state should be false', function (){
      result.fetching.should.be.false()
    })

    it('fail field in resulting state should be true', function (){
      result.fail.should.be.true()
    })

    it('spell result in resulting state should be empty', function (){
      result.result.should.be.empty()
    })
  })

})

import {fromJS} from 'immutable'
import spellbooksReducer from '../../../app/redux/reducers/spellbooks-reducer'
import should from 'should'
import {
    FETCH_SPELLBOOKS_STARTED,
    FETCH_SPELLBOOKS_SUCCESS,
    FETCH_SPELLBOOKS_FAILURE,
    CREATE_NEW_SPELLBOOK_STARTED,
    CREATE_NEW_SPELLBOOK_SUCCESS,
    CREATE_NEW_SPELLBOOK_FAILURE,
} from '../../../app/redux/actions/action-types'

describe('spellbooks reducer tests:', function() {

  describe('reducer receives the fetch spellbooks started action:', function(){
    const currentState = fromJS({
        fetching: false,
        creating: false,
        ready: false,
        fail: false,
        result: []
    })

    const result = spellbooksReducer(currentState, {type: FETCH_SPELLBOOKS_STARTED}).toJS()

    it('fetching field in resulting state should be true', function (){
      result.fetching.should.be.true()
    })

    it('fail field in resulting state should be false', function (){
      result.fail.should.be.false()
    })

    it('spellbook list in resulting state should be empty', function (){
      result.result.should.be.empty()
    })

  })

  describe('reducer receives the fetch spellbooks success action:', function(){
    const currentState = fromJS({
        fetching: true,
        creating: false,
        ready: false,
        fail: false,
        result: []
    })

    const result = spellbooksReducer(currentState, {type: FETCH_SPELLBOOKS_SUCCESS, result: [{},{}] }).toJS()

    it('fetching field in resulting state should be false', function (){
      result.fetching.should.be.false()
    })

    it('fail field in resulting state should be false', function (){
      result.fail.should.be.false()
    })

    it('spellbook result in resulting state should contain the result', function (){
      result.result.should.be.instanceof(Array)
    })
  })

  describe('reducer receives the fetch spellbooks failure action:', function(){
    const currentState = fromJS({
        fetching: true,
        creating: false,
        ready: false,
        fail: false,
        result: []
    })

    const result = spellbooksReducer(currentState, {type: FETCH_SPELLBOOKS_FAILURE}).toJS()

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

  describe('reducer receives the create new spellbook started action:', function(){
    const currentState = fromJS({
        fetching: false,
        creating: false,
        ready: false,
        fail: false,
        result: [
          {name: "Test 1", mage: "TestMage 1", totalPoints: 120},
          {name: "Test 2", mage: "TestMage 2", totalPoints: 120}
        ]
    })

    const result = spellbooksReducer(currentState, {type: CREATE_NEW_SPELLBOOK_STARTED}).toJS()

    it('creating field in resulting state should be true', function (){
      result.creating.should.be.true()
    })

    it('fail field in resulting state should be false', function (){
      result.fail.should.be.false()
    })

    it('spellbook list in resulting state should contain two items', function (){
      result.result.should.be.instanceof(Array).and.have.lengthOf(2)
    })

  })

  describe('reducer receives the create new spellbook success action:', function(){
    const currentState = fromJS({
        fetching: false,
        creating: true,
        ready: true,
        fail: false,
        result: [
          {name: "Test 1", mage: "TestMage 1", totalPoints: 120},
          {name: "Test 2", mage: "TestMage 2", totalPoints: 120}
        ]
    })

    const result = spellbooksReducer(currentState,
      {
        type: CREATE_NEW_SPELLBOOK_SUCCESS,
        result: {name: "Test 3", mage: "TestMage 3", totalPoints: 119}
      }).toJS()

    it('creating field in resulting state should be false', function (){
      result.creating.should.be.false()
    })

    it('fail field in resulting state should be false', function (){
      result.fail.should.be.false()
    })

    it('spellbook result in resulting state should contain three items', function (){
      result.result.should.be.instanceof(Array).and.have.lengthOf(3)
    })
  })

  describe('reducer receives the create new spellbook failure action:', function(){
    const currentState = fromJS({
        fetching: false,
        creating: true,
        ready: true,
        fail: false,
        result: [
          {name: "Test 1", mage: "TestMage 1", totalPoints: 120},
          {name: "Test 2", mage: "TestMage 2", totalPoints: 120}
        ]
    })

    const result = spellbooksReducer(currentState, {type: CREATE_NEW_SPELLBOOK_FAILURE}).toJS()

    it('creating field in resulting state should be false', function (){
      result.creating.should.be.false()
    })

    it('fail field in resulting state should be true', function (){
      result.fail.should.be.true()
    })
  })
})

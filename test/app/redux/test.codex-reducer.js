import {fromJS} from 'immutable'
import codexReducer from '../../../app/redux/reducers/codex-reducer'
import should from 'should'
import {
    FETCH_CODEX_STARTED,
    FETCH_CODEX_SUCCESS,
    FETCH_CODEX_FAILURE,
    SEARCH_CODEX_SUCCESS,
    SEARCH_CODEX_FAILURE,
} from '../../../app/redux/actions/action-types'

describe('codex reducer tests', function() {
  describe('reducer receives the fetch started action', function(){
    const currentState = fromJS({
        fetching: false,
        ready: false,
        fail: false,
        codexList: []
    })

    const result = codexReducer(currentState, {type: FETCH_CODEX_STARTED}).toJS()

    it('fetching field in resulting state should be true', function (){
      result.fetching.should.be.true()
    })

    it('fail field in resulting state should be false', function (){
      result.fail.should.be.false()
    })

    it('codex list in resulting state should be empty', function (){
      result.codexList.should.be.empty()
    })
  })

  describe('reducer receives the fetch success action', function(){
    const currentState = fromJS({
        fetching: true,
        ready: false,
        fail: false,
        codexList: []
    })

    const result = codexReducer(currentState, {type: FETCH_CODEX_SUCCESS, result: [{},{}] }).toJS()

    it('fetching field in resulting state should be false', function (){
      result.fetching.should.be.false()
    })

    it('fail field in resulting state should be false', function (){
      result.fail.should.be.false()
    })

    it('codex result in resulting state should contain the result', function (){
      result.codexList.should.be.instanceof(Array)
    })

  })

  describe('reducer receives the fetch failure action', function(){
      const currentState = fromJS({
          fetching: true,
          ready: false,
          fail: false,
          codexList: []
      })

      const result = codexReducer(currentState, {type: FETCH_CODEX_FAILURE}).toJS()

    it('fetching field in resulting state should be false', function (){
      result.fetching.should.be.false()
    })

    it('fail field in resulting state should be true', function (){
      result.fail.should.be.true()
    })

    it('codex result in resulting state should be empty', function (){
      result.codexList.should.be.empty()
    })
  })

  describe('reducer receives the search success action', function(){
      const currentState = fromJS({
          fetching: false,
          ready: true,
          fail: false,
          codexList: [{},{},{}]
      })

      const result = codexReducer(currentState, {type: SEARCH_CODEX_SUCCESS, result: [{}]}).toJS()

    it('fail field in resulting state should be false', function (){
      result.fail.should.be.false()
    })

    it('codex result in resulting state should contain one item', function (){
      result.codexList.should.be.instanceof(Array).and.have.lengthOf(1)
    })
  })

  describe('reducer receives the search failure action', function(){
      const currentState = fromJS({
          fetching: false,
          ready: true,
          fail: false,
          codexList: [{},{},{}]
      })

      const result = codexReducer(currentState, {type: SEARCH_CODEX_FAILURE, result: [{}]}).toJS()

    it('fail field in resulting state should be true', function (){
      result.fail.should.be.true()
    })
  })

})

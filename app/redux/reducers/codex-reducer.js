import {List, Map, fromJS} from 'immutable'
import {
    FETCH_CODEX_STARTED,
    FETCH_CODEX_SUCCESS,
    FETCH_CODEX_FAILURE,
    SEARCH_CODEX_SUCCESS,
    SEARCH_CODEX_FAILURE,
} from '../actions/action-types'

const initialState = fromJS({
    fetching: false,
    ready: false,
    fail: false,
    codexList: []
})

const codexReducer = (state = initialState, action) => {
    switch (action.type){
      case FETCH_CODEX_STARTED:
          return state.set('fetching', true)

      case SEARCH_CODEX_SUCCESS:
      case FETCH_CODEX_SUCCESS:
          return state.withMutations(state => {
              state.set('fetching', false)
              state.set('ready', true)
              state.set('codexList', fromJS(action.result))
          })

      case FETCH_CODEX_FAILURE:
          return state.withMutations(state => {
              state.set('fetching', false)
              state.set('fail', true)
          })
    }

    return state
}

export default codexReducer

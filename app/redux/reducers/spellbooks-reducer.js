import {List, Map, fromJS} from 'immutable'
import {
    FETCH_SPELLBOOKS_STARTED,
    FETCH_SPELLBOOKS_SUCCESS,
    FETCH_SPELLBOOKS_FAILURE,
} from '../actions/action-types'

const initialState = fromJS({
    fetching: false,
    ready: false,
    fail: false,
    filter: {
      searchText: '',
      limit: 10
    },
    result: []
})

const spellbooksReducer = (state = initialState, action) => {
    switch (action.type){
      case FETCH_SPELLBOOKS_STARTED:
          return state.set('fetching', true)

      case FETCH_SPELLBOOKS_SUCCESS:
          return state.withMutations(state => {
              state.set('fetching', false)
              state.set('ready', true)
              state.set('result', fromJS(action.result))
          })

      case FETCH_SPELLBOOKS_FAILURE:
          return state.withMutations(state => {
              state.set('fetching', false)
              state.set('fail', true)
          })
    }

    return state
}

export default spellbooksReducer

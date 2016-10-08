import {List, Map, fromJS} from 'immutable'
import {
    FETCH_SPELLBOOKS_STARTED,
    FETCH_SPELLBOOKS_SUCCESS,
    FETCH_SPELLBOOKS_FAILURE,
    CREATE_NEW_SPELLBOOK_STARTED,
    CREATE_NEW_SPELLBOOK_SUCCESS,
    CREATE_NEW_SPELLBOOK_FAILURE,
} from '../actions/action-types'

const initialState = fromJS({
    fetching: false,
    creating: false,
    ready: false,
    fail: false,
    filter: {
      limit: 10,
      searchText: ""
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

      case CREATE_NEW_SPELLBOOK_STARTED:
        return state.withMutations(state => {
            return state.set('creating', true)
        })

      case CREATE_NEW_SPELLBOOK_SUCCESS:
        return state.withMutations(state => {
          state.set('creating', false)
          state.set('result', state.get('result').push(action.result))
        })

      case CREATE_NEW_SPELLBOOK_FAILURE:
        return state.withMutations(state => {
            state.set('creating', false)
            state.set('fail', true)
        })
    }

    return state
}

export default spellbooksReducer

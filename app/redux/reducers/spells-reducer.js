import {List, Map, fromJS} from 'immutable'
import {
    FETCH_SPELLS_STARTED,
    FETCH_SPELLS_SUCCESS,
    FETCH_SPELLS_FAILURE,
} from '../actions/action-types'

const initialState = fromJS({
    fetching: false,
    ready: false,
    fail: false,
    filter: {
      spellTypes:
        [
          {value: "conjurations", selected: false},
          {value: "attacks", selected: false}
        ],
      limit: 10
    },
    result: []
})

const spellsReducer = (state = initialState, action) => {
    switch (action.type){
      case FETCH_SPELLS_STARTED:
          return state.set('fetching', true)

      case FETCH_SPELLS_SUCCESS:
          return state.withMutations(state => {
              state.set('fetching', false)
              state.set('ready', true)
              state.set('result', fromJS(action.result))
          })

      case FETCH_SPELLS_FAILURE:
          return state.withMutations(state => {
              state.set('fetching', false)
              state.set('fail', true)
          })
    }

    return state
}

export default spellsReducer

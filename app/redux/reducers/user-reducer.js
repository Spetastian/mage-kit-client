import {List, Map, fromJS} from 'immutable'
import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_LOGOUT,
} from '../actions/action-types'

const initialState = fromJS({
  authenticated : false,
  authenticating : false,
  authenticationFail : false,
})

const userReducer = (state = initialState, action) => {
  switch (action.type){

    case LOGIN_STARTED:
      return state.set('authenticating', true)

    case LOGIN_SUCCESS:
      return state.withMutations(state => {
        state.set('authenticating', false)
        state.set('authenticated', true)
      })

    case LOGIN_FAILURE:
      return state.withMutations(state => {
        state.set('authenticated', false)
        state.set('authenticating', false)
        state.set('authenticationFail', true)
      })

      case USER_LOGOUT:
        return state.withMutations(state => {
          state.set('authenticating', false)
          state.set('authenticated', false)
        })
  }

  return state
}

export default userReducer

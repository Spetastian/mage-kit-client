import { createStore, applyMiddleware, compose } from 'redux'
import {Map} from 'immutable'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {combineReducers} from 'redux-immutable';
import codexReducer from './reducers/codex-reducer'
import spellsReducer from './reducers/spells-reducer'
import spellbooksReducer from './reducers/spellbooks-reducer'
import userReducer from './reducers/user-reducer'
import routerReducer from './reducers/router-reducer'

const rootReducer = combineReducers({
  codex: codexReducer,
  spells: spellsReducer,
  spellbooks: spellbooksReducer,
  routing: routerReducer,
  user: userReducer,
})

let finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore)

export default function configureStore(initialState = Map({})) {
  return finalCreateStore(rootReducer, initialState)
}

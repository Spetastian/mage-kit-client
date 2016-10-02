import {
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    USER_REQUIRE_AUTH,
    FETCH_CODEX_STARTED,
    FETCH_CODEX_SUCCESS,
    FETCH_CODEX_FAILURE,
    SEARCH_CODEX_SUCCESS,
    SEARCH_CODEX_FAILURE,
    FETCH_SPELLS_STARTED,
    FETCH_SPELLS_SUCCESS,
    FETCH_SPELLS_FAILURE,
    FETCH_SPELLBOOKS_STARTED,
    FETCH_SPELLBOOKS_SUCCESS,
    FETCH_SPELLBOOKS_FAILURE,
    CREATE_NEW_SPELLBOOK_STARTED,
    CREATE_NEW_SPELLBOOK_SUCCESS,
    CREATE_NEW_SPELLBOOK_FAILURE,
} from './action-types'

import CodexService from '../../services/codex-service'
import SpellService from '../../services/spell-service'
import SpellbookService from '../../services/spellbook-service'
import AuthService from '../../services/auth-service'
import ClientCache from '../../utils/client-cache'
const clientCache = new ClientCache()

export default function create(
  codexService = new CodexService(clientCache),
  spellService = new SpellService(clientCache),
  spellbookService = new SpellbookService(clientCache),
  authService = new AuthService(clientCache)){

  return {
    loginRequest(username, password){
      return dispatch => {
        dispatch(loginStarted())
        return authService.authenticate(username, password)
          .then(result => {
            dispatch(loginSuccess())
          })
          .catch(err => dispatch(loginFailure(err)))
      }
    },

    promptAuthentication(){
      dispatch(requireUserAuth())
    },

    initCodexDataRequest(){
      return dispatch => {
        dispatch(fetchCodexStarted())
        return codexService.initCodexData()
          .then(() => {return codexService.getCodex()})
          .then(result => {
            dispatch(fetchCodexSuccess(result))
          })
          .catch(err => dispatch(fetchCodexFailure(err)))
      }
    },

    searchCodexRequest(filter){
      try {
        const searchResult = codexService.getCodex(filter)
        return dispatch => dispatch(searchCodexSuccess(searchResult))
      }
      catch(err)
      {
        return dispatch => dispatch(searchCodexFailure(err))
      }
    },

    fetchSpellsRequest(filter = {}){
      return dispatch => {
        dispatch(fetchSpellsStarted())
        return spellService.getSpells(filter)
          .then(result => dispatch(fetchSpellsSuccess(result)))
          .catch(err => dispatch(fetchSpellsFailure(err)))
      }
    },

    fetchSpellbooksRequest(filter = {}){
      return dispatch => {
        dispatch(fetchSpellbooksStarted())
        return spellbookService.getSpellbooks(filter)
          .then(result => dispatch(fetchSpellbooksSuccess(result)))
          .catch(err => dispatch(fetchSpellbooksFailure(err)))
      }
    },

    createNewSpellbookRequest(){
      return dispatch => {
        dispatch(createNewSpellbookStarted())
        return spellbookService.createNewSpellbook()
          .then(result => dispatch(createNewSpellbookSuccess(result)))
          .catch(err => dispatch(createNewSpellbookFailure(err)))
      }
    }
  }
}
//Login async private action creators
function loginStarted() {
  return {type: LOGIN_STARTED}
}

function loginSuccess() {
  return {type: LOGIN_SUCCESS}
}

function requireUserAuth() {
  return {type: USER_REQUIRE_AUTH}
}

function loginFailure(error) {
  return {type: LOGIN_FAILURE, error: error}
}

//Fetch codex async private action creators
function fetchCodexStarted() {
  return {type: FETCH_CODEX_STARTED}
}

function fetchCodexSuccess(result) {
  return {type: FETCH_CODEX_SUCCESS, result: result}
}

function fetchCodexFailure(error) {
  return {type: FETCH_CODEX_FAILURE, error: error}
}

//Search codex private action creators
function searchCodexSuccess(result) {
  return {type: SEARCH_CODEX_SUCCESS, result: result}
}

function searchCodexFailure(error) {
  return {type: SEARCH_CODEX_FAILURE, error: error}
}

//Fetch spells async private action creators
function fetchSpellsStarted() {
  return {type: FETCH_SPELLS_STARTED}
}

function fetchSpellsSuccess(result) {
  return {type: FETCH_SPELLS_SUCCESS, result: result}
}

function fetchSpellsFailure(error) {
  return {type: FETCH_SPELLS_FAILURE, error: error}
}

//Fetch spellbooks async private action creators
function fetchSpellbooksStarted() {
  return {type: FETCH_SPELLBOOKS_STARTED}
}

function fetchSpellbooksSuccess(result) {
  return {type: FETCH_SPELLBOOKS_SUCCESS, result: result}
}

function fetchSpellbooksFailure(error) {
  return {type: FETCH_SPELLBOOKS_FAILURE, error: error}
}

//Create new spellbook async private action creators
function createNewSpellbookStarted() {
  return {type: CREATE_NEW_SPELLBOOK_STARTED}
}

function createNewSpellbookSuccess(result) {
  return {type: CREATE_NEW_SPELLBOOK_SUCCESS, result: result}
}

function createNewSpellbookFailure(error) {
  return {type: CREATE_NEW_SPELLBOOK_FAILURE, error: error}
}

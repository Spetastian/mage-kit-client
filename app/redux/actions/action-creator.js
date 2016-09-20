import {
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
} from './action-types'

import CodexService from '../../services/codex-service'
import SpellService from '../../services/spell-service'
import SpellbookService from '../../services/spellbook-service'
import ClientCache from '../../utils/client-cache'
const clientCache = new ClientCache()

export default function create(codexService = new CodexService(clientCache), spellService = new SpellService(clientCache)){
  return {
    initCodexDataRequest(){
      return dispatch => {
        dispatch(fetchCodexStarted())
        return codexService.initCodexData()
          .then(() => {return codexService.getCodex()})
          .then((result) => {
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
          .catch(ex => dispatch(fetchSpellsFailure(ex)))
      }
    },

    fetchSpellbooksRequest(filter = {}){
      return dispatch => {
        dispatch(fetchSpellbooksStarted())
        return spellbookService.getSpellbooks(filter)
          .then(result => dispatch(fetchSpellbooksSuccess(result)))
          .catch(ex => dispatch(fetchSpellbooksFailure(ex)))
      }
    }
  }
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

const fakeApiUrl = 'http://fake.core-api'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import CodexService from '../../../app/services/codex-service'
import SpellService from '../../../app/services/spell-service'
import SpellbookService from '../../../app/services/spellbook-service'
import actionCreator from '../../../app/redux/actions/action-creator'

class FakeClientCache {

  constructor(){
    this.cache = new Map([])
  }

  getObject(key){
    return this.cache.get(key)
  }

  setObject(key, value){
    this.cache.set(key, value)
  }

}

const clientCache = new FakeClientCache()
const codexService = new CodexService(clientCache)
const spellService = new SpellService(clientCache)
const spellbookService = new SpellbookService(clientCache)

const actions = actionCreator(codexService, spellService, spellbookService)

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureMockStore(middlewares)

describe('action creator tests: ', function () {

  describe('dispatching init codex data async action:', function() {
    it('should dispatch "started" then "success" with codex result when request is successfull')
    it('should dispatch "started" then "failure" when request is unsuccessfull')
  })

  describe('dispatching fetch spells async action:', function() {
    it('should dispatch "started" then "success" with spell result when request is successfull')
    it('should dispatch "started" then "failure" when request is unsuccessfull')
  })

  describe('dispatching fetch spellbooks async action:', function() {
    it('should dispatch "started" then "success" with spellbook result when request is successfull')
    it('should dispatch "started" then "failure" when request is unsuccessfull')
  })

  describe('dispatching create new spellbooks async action:', function() {
    it('should update state twice with "started" then "success" with the newly created spellbook when request is successfull')
    it('should update state twice with "started" then "failure" when request is unsuccessfull')
  })

  describe('dispatching search codex action:', function() {
    it('should dispatch "success" with codex search result when request is successfull')
    it('should dispatch "failure" when request is unsuccessfull')
  })
})

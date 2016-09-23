
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

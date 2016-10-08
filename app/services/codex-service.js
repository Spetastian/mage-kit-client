import assert from 'assert'
const StandardBaseUrl = process.env.API_BASE_URL || '/api'
const CodexCacheKey = 'codex.data'

export default class CodexService {

  constructor (cache){
    assert(cache)

    this.cache = cache
    this.codexData = this.cache.getObject(CodexCacheKey) || {}
  }

  initCodexData(){
    const codexUrl = `${StandardBaseUrl}/codex?checksum=${this.codexData.checksum || ''}`
    return fetch(codexUrl)
      .then(res => {
          if(!res.ok)
            throw new Error("Error fetching Codex from api")

            return res.json()
      })
      .then(jsonResult => {
        if(jsonResult.hasChanged){
          this.cache.setObject(CodexCacheKey, jsonResult.codex)
          this.codexData = jsonResult.codex
        }
      })
  }

  getCodex(filter = {limit: 10, searchText: ''}){
    assert(filter.limit, "CodexService.getCodex: filter.limit is undefined needs to be set")

    return this.codexData.list.filter((codexItem, index) => {
      return ((codexItem.name.toLowerCase().startsWith(filter.searchText.toLowerCase()) || filter.searchText === '') && index < filter.limit)
    })
  }
}

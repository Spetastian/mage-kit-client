import assert from 'assert'
const StandardBaseUrl = process.env.API_BASE_URL || '/api'
const EmptySpellbook = {
  name: '',
  mage: '',
}

export default class SpellbookService {

  constructor (cache){
    assert(cache)

    this.cache = cache
  }

  getSpellbooks(filter = {limit: 10, searchText: null}){
    assert(filter.limit)

    const spellbooksUrl = `${StandardBaseUrl}/spellbooks?limit=${filter.limit}&searchText=${filter.searchText}`
    return fetch(spellbooksUrl,
      {
        headers: {'x-access-token' : this.cache.getAuthToken()}
      })
      .then(res => {
          if(!res.ok)
            throw new Error("Error fetching Spellbooks from api")

            return res.json()
      })
  }

  createNewSpellbook(){

    const createNewspellbookUrl = `${StandardBaseUrl}/spellbooks`
    return fetch(createNewspellbookUrl,
      {
        method: 'POST',
        body: JSON.stringify(EmptySpellbook),
        headers: {'x-access-token' : this.cache.getAuthToken()}
      })
      .then(res => {
          if(!res.ok)
            throw new Error("Error fetching Spellbooks from api")

            return res.json()
      })
  }

}

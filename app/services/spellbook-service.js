import assert from 'assert'
const StandardBaseUrl = process.env.API_BASE_URL || '/api'
const EmptySpellbook = {
  name: '',
  wizard: '',
}

export default class SpellbookService {

  constructor (cache){
    assert(cache)

    this.cache = cache
  }

  getSpellbooks(filter = {limit: 10, searchText: null}){
    assert(filter.limit)

    const spellbooksUrl = `${StandardBaseUrl}/spellbooks?limit=${filter.limit}&searchText=${filter.searchText}`
    return fetch(spellbooksUrl)
          .then(res => {
              if(!res.ok)
                throw new Error("Error fetching Spellbooks from api")

                return res.json()
          })
  }

  createNewSpellbook(){

    const createNewspellbookUrl = `${StandardBaseUrl}/spellbooks`
    return fetch(createNewspellbookUrl, { method: 'POST', body: JSON.stringify(EmptySpellbook) })
          .then(res => {
              if(!res.ok)
                throw new Error("Error fetching Spellbooks from api")

                return res.json()
          })
  }

}

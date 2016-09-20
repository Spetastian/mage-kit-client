import assert from 'assert'
const StandardBaseUrl = process.env.API_BASE_URL || '/api'

export default class SpellbookService {

  constructor (cache){
    assert(cache)

    this.cache = cache
  }

  getSpells(filter = {limit: 10, searchText: null}){
    assert(filter.limit)

    const spellbooksUrl = `${StandardBaseUrl}/spellbooks?limit=${filter.limit}&searchText=${filter.searchText}`
    return fetch(spellbooksUrl)
          .then(res => {
              if(!res.ok)
                throw new Error("Error fetching Spellbooks from api")

                return res.json()
          })
  }

}

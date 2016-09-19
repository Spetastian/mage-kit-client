import assert from 'assert'
const StandardBaseUrl = process.env.API_BASE_URL || '/api'

export default class SpellService {

  constructor (cache){
    assert(cache)

    this.cache = cache
  }

  getSpells(filter = {limit: 10, searchText: null}){
    assert(filter.limit)
    
    const spellsUrl = `${StandardBaseUrl}/spells?limit=${filter.limit}&searchText=${filter.searchText}`
    return fetch(spellsUrl)
          .then(res => {
              if(!res.ok)
                throw new Error("Error fetching Spells from api")

                return res.json()
          })
  }

}

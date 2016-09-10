const StandardBaseUrl = process.env.API_BASE_URL || '/api'

export default class SpellService {

  constructor (cache){
    this.cache = cache
  }

  getSpells(filter = {limit: 10, searchText: null}){
    const url = StandardBaseUrl+'?limit='+filter.limit+'&searchText='+filter.searchText;
    return fetch(url)
          .then(res => {
              if(!res.ok)
                throw new Error("Error fetching Spells from api")

                return res.json()
          })
  }

}

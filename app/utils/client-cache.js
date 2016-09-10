export default class ClientCache {
  getObject(key){

    let cachedValue = localStorage.getItem(key)

    if(cachedValue)
      cachedValue = JSON.parse(cachedValue)

    return cachedValue
  }
  setObject(key, value){

    if(key !== undefined && value !== undefined){
      localStorage.setItem(key, JSON.stringify(value))
    }

  }
}

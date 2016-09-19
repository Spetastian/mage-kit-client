import assert from 'assert'

export default class ClientCache {
  getObject(key){
    assert(key)

    let cachedValue = localStorage.getItem(key)

    if(cachedValue)
      cachedValue = JSON.parse(cachedValue)

    return cachedValue
  }
  setObject(key, value){
    assert(key)
    assert(value)

    localStorage.setItem(key, JSON.stringify(value))

  }
}

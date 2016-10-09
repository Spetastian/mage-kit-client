import assert from 'assert'
import cookies from 'cookies-js'

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

  setAuthToken(authToken){
    assert(authToken)

    cookies.set('authToken', authToken)
  }

  getAuthToken(){
    return cookies.get('authToken')
  }

  clearAuthToken(){
    cookies.expire('authToken')
  }

}

import assert from 'assert'
const StandardBaseUrl = process.env.API_BASE_URL || '/api'

export default class AuthService {

  constructor (cache){
    assert(cache)

    this.cache = cache
  }

  authenticate(username="", password=""){

    const authenticateUrl = `${StandardBaseUrl}/authenticate`
    return fetch(authenticateUrl,
      {
        method: 'POST',
        body: JSON.stringify({username: username, password: password}),
        headers: {
            'Content-Type': 'application/json'
        }
      })
      .then(res => {
          if(!res.ok)
            throw new Error("Error authenticating user")

            this.cache.saveAuthToken(res)
            return res.json()
      })
  }

}

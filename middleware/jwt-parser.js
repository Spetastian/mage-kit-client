const jwt = require('jsonwebtoken')
module.exports = function(jwtSecret){
  return function(req, res, next){

    const token = req.headers['x-access-token']

    if (token) {
      jwt.verify(token, jwtSecret, function(err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Invalid authentication token.' });
        } else {
          req.decodedAuthToken = decoded
          next();
        }
      });
    }
    else{
      next();
    }
  }
}

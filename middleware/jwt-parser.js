const jwt = require('jsonwebtoken')
module.exports = function(jwtSecret){
  return function(req, res, next){

    const token = req.headers['x-access-token'];

    if (token) {
      jwt.verify(token, jwtSecret, function(err, decoded) {
        if (err) {
          console.log(err)
          return res.json({ success: false, message: 'Invalid authentication token.' });
        } else {
          console.log("decoded", decoded)
          req.decodedAuthToken = decoded;
          next();
        }
      });
    }
    else{
      next();
    }

  }
}

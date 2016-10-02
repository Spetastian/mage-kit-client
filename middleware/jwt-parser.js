const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){

  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Invalid authentication token.' });
      } else {
        req.decodedAuthToken = decoded;
      }
    });
  }
  next();

}

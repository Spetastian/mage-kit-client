module.exports = function(req, res, next){
  console.log(req.decodedAuthToken);
  if(req.decodedAuthToken){
    return next()
  }
  else{
    return res.status(403).send({
        success: false,
        message: 'Invalid authentication token.'
    });
  }
}

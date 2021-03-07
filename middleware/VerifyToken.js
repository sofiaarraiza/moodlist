module.exports = function(req, res, next){
    token2 = req.session.access_token
    console.log('middleware token', token2)
    token = req.header('access-token')
    if(!token) return res.status(401).send('Access denied')
    next()
}
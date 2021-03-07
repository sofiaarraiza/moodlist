const AuthService = require('../../services/AuthService')

exports.loginUser = function(req, res) {
    return AuthService.login_spotify(req, res)
}

exports.callbackFunction = function(req, res){
    return AuthService.get_spotify_token(req, res)
}

exports.getUserInfo = function(req, res){
    return AuthService.get_user_info(req, res)
}
const SpotifyWebApi = require('spotify-web-api-node')
const User = require('../models/User')

exports.get_user_by_id = async function(req, res) {
    User.findById(req.params.id)
        .then(user => res.json(user))
}

exports.get_user_by_token = async function(req, res) {
    User.findOne({token: req})
        .then(user => res.json(user))
}

/*
exports.findOneOrCreate = async function (token, res) {


    self.findOne( {
        $or: [
            { 'spotifyId': condition.id }, {'email': condition.emails[0].value}
    ]}, (err, result) => {
        if (result) {
            callback(err, result)
         }
        else {
            console.log('--------- CONDITION ---------');
            console.log(condition);
            let values = {};
            values.googleId = condition.id;
            values.email = condition.emails[0].value;
            values.nombre = condition.displayName || 'SIN NOMBRE';
            values.verificado = true;
            values.password = crypto.randomBytes(16).toString('hex')
            console.log('----------- VALUES ----------');
            console.log(values);
            self.create(values, (err, result) => {
                if (err)  console.log(err); 
                return callback(err, result)
            })
        }
    })
};*/
let PlaylistService = require('../../services/PlaylistService')

exports.getPlaylist = function(req, res) {
    console.log(req.session.test)
    return PlaylistService.create_playlist(req, res)
}
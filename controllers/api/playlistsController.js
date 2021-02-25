
let PlaylistService = require('../../services/PlaylistService')


exports.getPlaylist = function(req, res) {
    return PlaylistService.create_playlist(req, res)   
}
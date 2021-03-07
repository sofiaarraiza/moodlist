let SpotifyWebApi = require('spotify-web-api-node');

exports.create_playlist = async function(req, res) {

    let spotifyApi = new SpotifyWebApi()
    let moods = req.body
    
    spotifyApi.setAccessToken(req.header('access-token'))
    spotifyApi
        .getAlbum('6AORtDjduMM3bupSWzbTSG')
            .then(data => {
                return data.body.tracks.items.map((track) => track.id)
            })
            .then(trackIds => {
                return spotifyApi.getAudioFeaturesForTracks(trackIds)
            })
            .then(tracksData => {
                return tracksData.body.audio_features.map((track) => ({
                    "danceability": track.danceability,
                    "energy": track.energy,
                    "acousticness": track.acousticness,
                    "valence": track.valence,
                    "id": track.id,
                    "name": ""
                }))
            })
            .then(tracksDataFiltered => res.json(tracksDataFiltered))
}
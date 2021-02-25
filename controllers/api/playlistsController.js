var SpotifyWebApi = require('spotify-web-api-node');
let PlaylistService = require('../../services/PlaylistService')

var spotifyApi = new SpotifyWebApi({
    clientId: '178e178800914785b8ddc5dbeaa1b9e1',
    clientSecret: '41fd3b77115f4db883cb83f790187ae7',
    redirectUri: 'http://www.example.com/callback'
});

spotifyApi.setAccessToken('BQA-RhK4GmND2XcOFzxGT6SkAIW5dOXykVqv7WL13Ysuftg4wAKRq6YdCaoIQhCBuUBbcC_-FDk7Rht-ts6BMmDUtjd1x5amNa_ZZKoMZiqxgiEE1kxnmjipw1mlyJEW5O6l7xHTi095XNGRuUKhXG1H46aS2AKDmNybvOSCQjyzi90cfS3d_QOFffF6D08_kn2wp_itZWMjIOj_gMN9dj9slXdGQClHp6fjoAdhfJUG_r5vdHbcOpgZBjbbs8IK0bA9uqbrWY_VyIdD2LAYNTlh1L8');

exports.getPlaylist = function(req, res) {
    return PlaylistService.create_playlist(req, res, spotifyApi)   
}
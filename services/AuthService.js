require('dotenv').config()
let SpotifyWebApi = require('spotify-web-api-node');
let scopes = ['user-read-private', 'user-read-email', 'playlist-modify-private'],
    state = 'some-state-of-my-choice'
let credentials = {
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET
}

exports.login_spotify = async function (req, res) {
    createSpotifyApi()
        .then(spotifyApi => {
            res.redirect(spotifyApi.createAuthorizeURL(scopes, state))
        })
}

async function createSpotifyApi() {
    let spotifyApi = new SpotifyWebApi(credentials)
    return spotifyApi
}

exports.get_spotify_token = async function(req, res){
    const error = req.query.error;
    const code = req.query.code;
  
    if (error) {
      console.error('Callback Error:', error);
      res.send(`Callback Error: ${error}`);
      return;
    }

    createSpotifyApi()
      .then(spotifyApi => {
        spotifyApi
          .authorizationCodeGrant(code)
          .then(data => {
            access_token = data.body['access_token']
            refresh_token = data.body['refresh_token']
            expires_in = data.body['expires_in']

            spotifyApi.setAccessToken(access_token);
            spotifyApi.setRefreshToken(refresh_token);
      
            console.log('access_token:', access_token);
            console.log('refresh_token:', refresh_token);
            console.log(
              `Sucessfully retreived access token. Expires in ${expires_in} s.`
            );
            req.session.test = "this is a test"
            req.session.access_token = access_token
            req.session.save()
            console.log(req.session.access_token, " esto es el token en el backkkkkk")
            res.redirect(`http://localhost:3000/?access_token=${access_token}`)
          })
          .catch(error => {
            console.error('Error getting Tokens:', error);
            res.send(`Error getting Tokens: ${error}`);
          });
      })
}

exports.get_token = async function(req, res) {
  return req.session.access_token
}
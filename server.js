require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
let request = require('request')

const querystring = require('querystring')

// Import Routes
const moodsRouter = require('./routes/api/moods')
const playlistsRouter = require('./routes/api/playlists')
const authRouter = require('./routes/api/auth')

// Bodyparser Middleware
app.use(bodyParser.json())

// DB Config
const db = process.env.MONGO_URI

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

const port = process.env.PORT || 5000
const redirect_uri = process.env.REDIRECT_URI || 'http://localhost:5000/callback'

// Use Routes
app.use('/api/moods', moodsRouter)
app.use('/api/playlists', playlistsRouter)
app.use('/api/auth', authRouter)

/*
app.get('/login', function(req, res) {
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
          response_type: 'code',
          client_id: SPOTIFY_CLIENT_ID,
          scope: 'user-read-private user-read-email',
          redirect_uri
      }))
})

app.get('/callback', function(req, res) {
    let code = req.query.code || null
    let authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET)
            .toString('base64'))
      },
      json: true
    }
    request.post(authOptions, function(error, response, body) {
      var access_token = body.access_token
      let uri = 'http://localhost:3000'
      res.redirect(uri + '?access_token=' + access_token)
    })
  })*/
  
app.listen(port, () => console.log('Server started on', port))


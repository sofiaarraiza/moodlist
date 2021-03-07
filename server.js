require('dotenv').config()
const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      cookieParser = require('cookie-parser')
var session = require('express-session')

const app = express()
const port = process.env.PORT || 5000
const db = process.env.MONGO_URI

let store = new session.MemoryStore

app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors())
app.use(session({
    secret: 'holis',
    saveUninitialized: false,
    resave: false,
    store: store,
}))

// Import Routes
const moodsRouter = require('./routes/api/moods')
const playlistsRouter = require('./routes/api/playlists')
const authRouter = require('./routes/api/auth')

// Bodyparser Middleware




// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

// Use Routes
app.use('/api/moods', moodsRouter)
app.use('/api/playlists', playlistsRouter)
app.use('/api/auth', authRouter)
  
app.listen(port, () => console.log('Server started on', port))


const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MoodSchema = require('./Mood')
const SongSchema = require('./Song')

//Create Schema
const PlaylistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    moods: {
        type: [MoodSchema],
        required: true
    },
    songs: {
        type: [SongSchema]
    }
})

module.exports = Playlist = mongoose.model('playlist', PlaylistSchema)
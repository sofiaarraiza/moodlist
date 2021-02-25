const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Schema
const SongSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    spotify_id: {
        type: String,
        required: true
    },
    audio_features: {
        type: Array,
        default: false
    }
})

module.exports = Song = mongoose.model('song', SongSchema)
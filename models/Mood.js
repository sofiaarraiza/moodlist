const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Schema
const MoodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    selected: {
        type: Boolean,
        default: false
    }
})

module.exports = Mood = mongoose.model('mood', MoodSchema)
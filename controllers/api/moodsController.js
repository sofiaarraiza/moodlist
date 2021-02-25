const MoodSchema = require('../../models/Mood')
let MoodService = require('../../services/MoodService')

exports.showAll = function(req, res) {
    return MoodService.get_moods(req, res, MoodSchema)
}

exports.showOne = function(req, res) {
    return MoodService.get_one_mood(req, res, MoodSchema)
}

exports.createOne = function(req, res) {
    return MoodService.create_mood(req, res, MoodSchema)
}

exports.deleteOne = function(req, res) {
    return MoodService.delete_one_mood(req, res, MoodSchema)
}
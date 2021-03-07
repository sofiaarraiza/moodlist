const MoodSchema = require('../models/Mood')

exports.get_moods = async function(req, res) {
    MoodSchema.find()
        .sort({ id: -1 })
        .then(moods => res.json(moods))
}

exports.get_one_mood = async function(req, res) {
    MoodSchema.findById(req.params.id)
        .then(mood => res.json(mood))
}

exports.delete_one_mood = async function(req, res) {
    MoodSchema.findById(req.params.id)
        .then(mood => mood.remove())
            .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }))
}

exports.create_one_mood = async function(req, res) {
    var newMood = new MoodSchema({
        name: req.body.name,
    })
    newMood.save().then(mood => {
        res.json(mood)
    })
}
const express = require('express')
const router = express.Router()
const playlistsController = require('../../controllers/api/playlistsController')

router.post('/submit', playlistsController.getPlaylist)

module.exports = router
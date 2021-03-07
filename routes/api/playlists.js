const express = require('express')
const router = express.Router()
const playlistsController = require('../../controllers/api/playlistsController')
const VerifyToken = require('../../middleware/VerifyToken')

router.post('/submit', VerifyToken, playlistsController.getPlaylist)

module.exports = router
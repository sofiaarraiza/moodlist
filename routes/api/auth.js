const express = require('express')
const router = express.Router()
const authController = require('../../controllers/api/authController')

router.get('/login', authController.loginUser)
router.get('/callback', authController.callbackFunction)

module.exports = router
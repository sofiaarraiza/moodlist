const express = require('express')
const router = express.Router()
const moodsController = require('../../controllers/api/moodsController')

router.get('/', moodsController.showAll)
router.get('/:id', moodsController.showOne)
router.post('/', moodsController.createOne)
router.delete('/:id', moodsController.deleteOne)

module.exports = router
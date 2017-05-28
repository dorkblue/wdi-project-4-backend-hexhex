const router = require('express').Router()
const detailController = require('../controllers/detailController')

router.route('/:id')
.get(detailController.show)

module.exports = router

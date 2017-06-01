const router = require('express').Router()
const detailController = require('../controllers/detailController')

router.route('/:id')
.get(detailController.show)
.put(detailController.update)

module.exports = router

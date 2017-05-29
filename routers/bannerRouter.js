const router = require('express').Router()
const bannerController = require('../controllers/bannerController')

router.route('/:id')
.get(bannerController.show)
.put(bannerController.update)

module.exports = router

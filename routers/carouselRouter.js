const router = require('express').Router()
const carouselController = require('../controllers/carouselController')

router.route('/:id')
.get(carouselController.show)
.put(carouselController.update)

module.exports = router

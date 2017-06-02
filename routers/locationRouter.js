const router = require('express').Router()
const locationController = require('../controllers/locationController')

router.route('/:id')
.get(locationController.show)
.put(locationController.update)

module.exports = router

const router = require('express').Router()
const descriptionController = require('../controllers/descriptionController')

router.route('/:id')
.get(descriptionController.show)
.put(descriptionController.update)

module.exports = router

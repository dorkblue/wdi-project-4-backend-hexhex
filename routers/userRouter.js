const router = require('express').Router()
const userController = require('../controllers/userController')

router.route('/')
.post(userController.create)

router.route('/:id')
.get(userController.show)
.put(userController.update)
.delete(userController.destroy)

router.route('/:id/updatelogo')
.put(userController.updateLogo)

router.route('/:id/updateprofileimage')
.put(userController.updateProfileImage)

module.exports = router

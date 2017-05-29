const router = require('express').Router()
const brochureController = require('../controllers/brochureController')

router.route('/')
// .get(brochureController.index)
.post(brochureController.create)

// get all brochures under user
router.route('/:user_id')
.get(brochureController.index)

// get specific brochure under user
router.route('/:user_id/:id')
.get(brochureController.show)
.delete(brochureController.destroy)

// router.route('/')
// .post(descriptionController.create)
//
// router.route('/:id')
// .put(descriptionController.update)
// router.get('/', (req, res, next) => {
//   console.log(req)
//
//   res.send('Hello!')
// })

module.exports = router

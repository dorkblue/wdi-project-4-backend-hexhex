const router = require('express').Router()
const brochureController = require('../controllers/brochureController')

router.route('/')
.get(brochureController.index)
.post(brochureController.create)

router.route('/:id')
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

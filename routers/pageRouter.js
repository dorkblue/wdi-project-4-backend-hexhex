const router = require('express').Router()
const pageController = require('../controllers/pageController')

const routez = require('./routes')

router.route('/')
.get(pageController.index)
.post(pageController.create)
// router.get('/', (req, res, next) => {
//   console.log(req)
//
//   res.send('Hello!')
// })

module.exports = router

const router = require('express').Router()
// import firebase
const firebase = require('../scripts/firebase')
const auth = firebase.auth()
// const pageController = require('../controllers/pageController')

router.route('/signin')
.post((req, res, next) => {
  console.log(req.body)
  auth.signInWithEmailAndPassword(req.body.email, req.body.password)
  .then((user) => {
    console.log('user', user)
    console.log('user uid', user.email)
  })
  .catch((err) => {
    console.log('error', err)
  })
})
router.route('/signout')
.post((req, res, next) => {
  console.log(req.body)
  auth.signOut().then(function () {
    console.log('signed out success')
  })
})

router.route('/getuser')
.post((req, res, next) => {
  console.log(req.body)

  const user = auth.currentUser

  console.log('getuser', user)
})
// router.get('/', (req, res, next) => {
//   console.log(req)
//
//   res.send('Hello!')
// })

module.exports = router

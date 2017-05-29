// import firebase
const firebase = require('../scripts/firebase')
const database = firebase.database()

// run firebase codes here
const bannerAction = {
  update: (req, res, next) => {
    console.log(req.params)
    console.log(req.body)
    database
    .ref(`/banner/${req.params.id}`)
    .update(req.body)

    database.ref(`/banner/${req.params.id}`).once('value', (snapshot) => {
      res.json(snapshot.val())
    })
  },
  show: (req, res, next) => {
    console.log('banner params', req.params)
    database.ref(`/banner/${req.params.id}`).once('value', (snapshot) => {
      res.json(snapshot.val())
    })
  },
  destroy: (req, res, next) => {

  }
}

module.exports = bannerAction

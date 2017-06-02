// import firebase
const firebase = require('../scripts/firebase')
const database = firebase.database()

// run firebase codes here
const locationAction = {
  update: (req, res, next) => {
    console.log(req.params)
    console.log(req.body)
    database
    .ref(`/location/${req.params.id}`)
    .update(req.body)

    database.ref(`/location/${req.params.id}`).once('value', (snapshot) => {
      res.json(snapshot.val())
    })
  },
  show: (req, res, next) => {
    console.log('location params', req.params)
    database.ref(`/location/${req.params.id}`).once('value', (snapshot) => {
      console.log('location snapshot', snapshot.val())
      res.json(snapshot.val())
    })
  },
  destroy: (req, res, next) => {

  }
}

module.exports = locationAction

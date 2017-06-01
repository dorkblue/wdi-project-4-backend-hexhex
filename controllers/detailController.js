// import firebase
const firebase = require('../scripts/firebase')
const database = firebase.database()

// run firebase codes here
const detailAction = {
  update: (req, res, next) => {
    database
    .ref(`/details/${req.params.id}`)
    .update(req.body)

    database.ref(`/details/${req.params.id}`).once('value', (snapshot) => {
      res.json(snapshot.val())
    })
  },
  show: (req, res, next) => {
    console.log('detail params', req.params)
    database.ref(`/details/${req.params.id}`).once('value', (snapshot) => {
      res.json(snapshot.val())
    })
  },
  destroy: (req, res, next) => {

  }
}

module.exports = detailAction

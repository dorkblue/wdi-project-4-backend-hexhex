// import firebase
const firebase = require('../scripts/firebase')
const database = firebase.database()

// let question = database.ref().child('user')
//
// question.on('value', (question) => {
//   console.log(question.val())
// })

// run firebase codes here
const descriptionAction = {
  update: (req, res, next) => {
    database
    .ref(`/descriptions/${req.params.id}`)
    .update(req.body)

    database.ref(`/descriptions/${req.params.id}`).once('value', (snapshot) => {
      res.json(snapshot.val())
    })
  },
  show: (req, res, next) => {
    console.log('description params', req.params)
    database.ref(`/descriptions/${req.params.id}`).once('value', (snapshot) => {
      res.json(snapshot.val())
    })
  },
  destroy: (req, res, next) => {

  }
}

module.exports = descriptionAction

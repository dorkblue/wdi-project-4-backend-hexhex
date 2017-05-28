// import firebase
const firebase = require('../scripts/firebase')
const database = firebase.database()

// let question = database.ref().child('user')
//
// question.on('value', (question) => {
//   console.log(question.val())
// })

// run firebase codes here
const pageAction = {
  index: (req, res, next) => {
    res.send('get req received')
  },
  new: (req, res, next) => {

  },
  create: (req, res, next) => {
    // console.log(req)
    let newDescription = database.ref('/descriptions').push(req.body)

    newDescription.on('value', (data) => {
      console.log('data here ', data.val())
      res.json(data.val())
    })
  },
  edit: (req, res, next) => {

  },
  update: (req, res, next) => {

  },
  show: (req, res, next) => {

  },
  destroy: (req, res, next) => {

  }
}

module.exports = pageAction

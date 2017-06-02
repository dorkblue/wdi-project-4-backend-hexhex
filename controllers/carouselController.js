// import firebase
const firebase = require('../scripts/firebase')
const database = firebase.database()

// run firebase codes here
const carouselAction = {
  update: (req, res, next) => {
    console.log(req.params)
    console.log(req.body)
    database
    .ref(`/carouselpic/${req.params.id}`)
    .update(req.body)

    database.ref(`/carouselpic/${req.params.id}`).once('value', (snapshot) => {
      res.json(snapshot.val())
    })
  },
  show: (req, res, next) => {
    console.log('show carousel params', req.params)
    database.ref(`/carouselpic/${req.params.id}`).once('value', (snapshot) => {
      console.log('carousel snapshot', snapshot.val())

      const data = {
        url: snapshot.val().url,
        key: req.params.id
      }

      res.json(data)
    })
  },
  destroy: (req, res, next) => {

  }
}

module.exports = carouselAction

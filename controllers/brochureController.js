// import firebase
const firebase = require('../scripts/firebase')
const database = firebase.database()
const express = require('express')
const app = express()

// let question = database.ref().child('user')
//
// question.on('value', (question) => {
//   console.log(question.val())
// })

// run firebase codes here
const brochureAction = {
  index: (req, res, next) => {
    console.log('get all brochures req accepted!')
    const allBrochures = database.ref(`/brochures/${req.params.user_id}`)

    allBrochures.once('value', (snapshot) => {
      res.json(snapshot.val())
    })
  },
  create: (req, res, next) => {
    console.log('create new brochure req accepted!')
    console.log(req)
    const reqData = req.body.file

    // create new description
    const newDescriptionKey = database.ref('/descriptions').push({content: ''}).key
    reqData['descriptions_key'] = newDescriptionKey
    console.log('new description created', newDescriptionKey)

    // create new details
    const newDetailsKey = database.ref('/details').push({title: ''}).key
    reqData['details_key'] = newDetailsKey
    console.log('new details created', newDetailsKey)

    // create new details
    const newBannerKey = database.ref('/banner').push({url: ''}).key
    reqData['banner_key'] = newBannerKey
    console.log('new banner created', newBannerKey)

    // create new details
    for (let i = 0; i < 6; i++) {
      const newCarouselPicKey = database.ref(`/carouselpic`)
      .push({url: ''}).key
      reqData[`carousel${i}_key`] = newCarouselPicKey
      console.log('new banner created', newCarouselPicKey)
    }

    // create new brochure
    const newDraftKey = database.ref(`/brochures/${req.body.user}`).push(reqData).key
    console.log('new draft created', newDraftKey)

    // respond to request
    database.ref(`/brochures/${req.body.user}`).child(newDraftKey).once('value', (snapshot) => {
      res.json({
        data: snapshot.val(),
        key: newDraftKey
      })
    })
    // database.ref('/brochures/' + newDraftKey).once('value', (snapshot) => {
    //   res.json({
    //     data: snapshot.val(),
    //     key: newDraftKey
    //   })
    // })
  },
  update: (req, res, next) => {

  },
  show: (req, res, next) => {
    console.log(req.params.id)
    let brochureData = {}

    database.ref(`/brochures/${req.params.user_id}/${req.params.id}`)
    .once('value')
    .then(function (snapshot) {
      console.log('snapshot', snapshot.val())
      brochureData = snapshot.val()
      console.log('brochure data', brochureData)
      res.json(brochureData)
    })
  },
  destroy: (req, res, next) => {
    console.log('delete params', req.params)
    console.log('delete body', req.body)

    database.ref(`/brochures/${req.params.user_id}/${req.params.id}`).remove()
    database.ref(`/descriptions/${req.body.descriptions_key}`).remove()
    database.ref(`/details/${req.body.details_key}`).remove()
    database.ref(`/banner/${req.body.banner_key}`).remove()

    res.json({deleted: true})
  }
}

module.exports = brochureAction

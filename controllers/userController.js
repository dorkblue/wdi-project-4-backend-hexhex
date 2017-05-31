// import firebase
const firebase = require('../scripts/firebase')
const database = firebase.database()
const express = require('express')
const app = express()
const axios = require('axios')

// run firebase codes here
const userAction = {
  create: (req, res, next) => {
    console.log('create new user req accepted!')

    const userUID = req.body.user.uid
    const userField = {
      logoURL: '',
      agency: '',
      name: '',
      designation: '',
      mobile: '',
      workEmail: '',
      regnumber: '',
      profileURL: ''
    }

    // create new description
    database.ref(`/users/${userUID}`).set(userField)
    // respond to request
    database.ref(`/users/${userUID}`).once('value', (snapshot) => {
      console.log('snapshot', snapshot.val())
      res.json(snapshot.val())
    })
  },
  update: (req, res, next) => {
    console.log(req)
    const userUID = req.params.id
    database.ref(`/users/${userUID}`).update(req.body)

    database.ref(`/users/${userUID}`).once('value')
    .then((snapshot) => {
      res.json(snapshot.val())
    })
    .catch((err) => {
      console.log(err)
    })
  },
  updateLogo: (req, res, next) => {
    console.log(req)
    const userUID = req.params.id
    database.ref(`/users/${userUID}`).child('logoURL').set(req.body.logoURL)
    database.ref(`/users/${userUID}`).child('logoURL').once('value')
    .then((snapshot) => {
      res.json({logoURL: snapshot.val()})
    })
    .catch((err) => {
      console.log(err)
    })
  },
  updateProfileImage: (req, res, next) => {
    console.log(req)
    const userUID = req.params.id
    database.ref(`/users/${userUID}`).child('profileURL').set(req.body.profileURL)
    database.ref(`/users/${userUID}`).child('profileURL').once('value')
    .then((snapshot) => {
      res.json({profileURL: snapshot.val()})
    })
    .catch((err) => {
      console.log(err)
    })
  },
  show: (req, res, next) => {
    console.log(req.params.id)

    database.ref(`/users/${req.params.id}`)
    .once('value')
    .then(function (snapshot) {
      console.log('snapshot', snapshot.val())
      res.json(snapshot.val())
    })
  },
  destroy: (req, res, next) => {
    console.log('delete params', req.params)

    const allBanner = {}
    const allDescriptions = {}
    const allDetails = {}

    const allBrochures = {}
    //
    // database.ref(`/brochures/${req.params.id}`).once('value', (snapshot) => {
    //   console.log('I SHOULD COME FIRST')
    // })
    // .update(() => {
    //   console.log('I SHOULD COME LATER')
    // })

    database.ref(`/brochures/${req.params.id}`)
      .once('value')
      .then((snapshot) => {
        const allBrochures = snapshot.val()
        for (let brochureKey in allBrochures) {
          let bannerKey = allBrochures[brochureKey].banner_key
          let descriptionsKey = allBrochures[brochureKey].descriptions_key
          let detailsKey = allBrochures[brochureKey].details_key

          allBanner[bannerKey] = null
          allDescriptions[descriptionsKey] = null
          allDetails[detailsKey] = null
          allBrochures[brochureKey] = null
        }

        axios.all([
          database.ref(`/banner`).update(allBanner),
          database.ref(`/descriptions`).update(allDescriptions),
          database.ref(`/details`).update(allDetails),
          database.ref(`/brochures/${req.params.id}`).remove(),
          database.ref(`/users/${req.params.id}`).remove()
        ])
        .then(() => {
          res.json({deleted: true})
        })
      })

    // database.ref(`/users/${req.params.id}`).remove().then(() => {
    //   console.log('user deleted')
    // })

    // database.ref(`/brochures/${req.params.id}`).remove()
    // database.ref(`/descriptions/${req.body.descriptions_key}`).remove()
    // database.ref(`/details/${req.body.details_key}`).remove()
    // database.ref(`/banner/${req.body.banner_key}`).remove()

    // res.json({deleted: true})
  }
}

module.exports = userAction

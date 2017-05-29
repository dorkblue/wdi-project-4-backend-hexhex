// express setup
const express = require('express')
const app = express()
const port = process.env.PORT || 7777
const cors = require('cors')

// cors setup
app.use(cors())

// body-parser setup
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// router setups
const pageRouter = require('./routers/pageRouter')
app.use('/', pageRouter)

// description route setups
const authRouter = require('./routers/authRouter')
app.use('/auth', authRouter)

// description route setups
const descriptionRouter = require('./routers/descriptionRouter')
app.use('/descriptions', descriptionRouter)
app.use('/auth', authRouter)

// banner route setups
const bannerRouter = require('./routers/bannerRouter')
app.use('/banner', bannerRouter)

// detail route setups
const detailRouter = require('./routers/detailRouter')
app.use('/details', detailRouter)

// brochure route setups
const brochureRouter = require('./routers/brochureRouter')
app.use('/brochures', brochureRouter)

app.listen(port, () => {
  console.log(`app is running at ${port}`)
})

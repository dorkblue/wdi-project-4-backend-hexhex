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
const userRouter = require('./routers/userRouter')
app.use('/users', userRouter)

// description route setups
const descriptionRouter = require('./routers/descriptionRouter')
app.use('/descriptions', descriptionRouter)

// banner route setups
const bannerRouter = require('./routers/bannerRouter')
app.use('/banner', bannerRouter)

// detail route setups
const detailRouter = require('./routers/detailRouter')
app.use('/details', detailRouter)

// detail route setups
const locationRouter = require('./routers/locationRouter')
app.use('/location', locationRouter)

// brochure route setups
const brochureRouter = require('./routers/brochureRouter')
app.use('/brochures', brochureRouter)

app.listen(port, () => {
  console.log(`app is running at ${port}`)
})

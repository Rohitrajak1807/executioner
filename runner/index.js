const {HOST, PORT} = require('./conf/env')
const {connectDB} = require('./conf/db')
const app = require('express')()
const {router} = require('./route/routes.js')
const bodyParser = require('body-parser')
app.use(bodyParser.json({
    limit: '50mb'
}))
app.use(router)
app.listen(PORT, HOST, () => {
    console.log(`listening on ${PORT}`)
})

connectDB()

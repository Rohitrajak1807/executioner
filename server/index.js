const {HOST, PORT} = require('./conf/env')
const bodyParser = require('body-parser')
const cors = require('cors')
const {connectDB} = require('./conf/db')
const app = require('express')()
const {router} = require('./routes/core')
connectDB()
app.use(bodyParser.json({
    limit: '50mb'
}))
app.use(cors())
app.use(router)
app.listen(PORT, HOST, () => console.log(`listening on ${PORT}`))

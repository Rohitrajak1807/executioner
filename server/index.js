const {HOST, PORT} = require('./conf/env')
const bodyParser = require('body-parser')
const app = require('express')()
const {router} = require('./routes/core')
app.use(bodyParser.json({
    limit: '50mb'
}))

app.use(router)

app.listen(PORT, HOST, () => console.log(`listening on ${PORT}`))

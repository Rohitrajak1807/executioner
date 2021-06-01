const {HOST, PORT} = require('./utils/env')
const bodyParser = require('body-parser')
const app = require('express')()
app.use(bodyParser.json({
    limit: '50mb'
}))

app.route('/submit')
    .post((req, res) => {
        console.log(JSON.stringify(req.body))
        res.send(JSON.stringify(req.body))
    })

app.listen(PORT, HOST, () => console.log(`listening on ${process.env.PORT}`))

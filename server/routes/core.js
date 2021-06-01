const express = require('express')
const router = express.Router()
const {newRandomUid} = require('../utils/general')
const {HOST, PORT} = require('../conf/env')
const {errorResponse} = require('../utils/general')

router.post('/submit', async (req, res) => {
    try {
        const data = {
            src: req.body.src,
            stdin: req.body.input,
            lang: req.body.lang,
            id: newRandomUid()
        }

        res.status(202).send(`http://${HOST}:${PORT}/result/${data.id}`)
    } catch (e) {
        console.log(e)
        res.status(500).send(errorResponse(e.code, e.message))
    }
})

exports.router = router

const express = require('express')
const router = express.Router()
const {newRandomUid} = require('../utils/general')
const {HOST, PORT, RUNNER_PORT, RUNNER_HOST} = require('../conf/env')
const {errorResponse} = require('../utils/general')
const axios = require('axios')

router.post('/submit', async (req, res) => {
    try {
        const data = {
            src: req.body.src,
            stdin: req.body.input,
            lang: req.body.lang,
            id: newRandomUid()
        }
        const response = await axios.post(`http://${RUNNER_HOST}:${RUNNER_PORT}/run`, data)
        console.log(response)
        res.status(202).send(`http://${HOST}:${PORT}/result/${data.id}`)
    } catch (e) {
        console.log(e)
        res.status(500).send(errorResponse(e.code, e.message))
    }
})

exports.router = router

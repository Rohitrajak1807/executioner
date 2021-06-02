const express = require('express')
const router = express.Router()
const {newRandomUid} = require('../utils/general')
const {HOST, PORT, RUNNER_PORT, RUNNER_HOST} = require('../conf/env')
const {errorResponse, jobState} = require('../utils/general')
const axios = require('axios')
const {Job} = require('../models/job')

router.post('/submit', async (req, res) => {
    try {
        const data = {
            src: req.body.src,
            stdin: req.body.input,
            lang: req.body.lang,
            id: newRandomUid(),
            state: jobState.waiting
        }
        const response = await axios.post(`http://${RUNNER_HOST}:${RUNNER_PORT}/run`, data)
        console.log(`status: ${response.status}, config.data: ${response.config.data}, data: ${response.data}`)
        const dbResponse = await Job.create(data)
        console.log(`${dbResponse.id} created`)
        res.status(202).send(`http://${HOST}:${PORT}/result/${data.id}`)
    } catch (e) {
        console.log(e)
        res.status(500).send(errorResponse(e.code, e.message))
    }
})

exports.router = router

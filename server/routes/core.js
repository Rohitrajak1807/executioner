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
            stdin: req.body.input || '',
            lang: req.body.lang,
            id: newRandomUid(),
            state: jobState.waiting
        }
        console.log(process.env.DB_URI)
        const dbResponse = await Job.create(data)
        console.log(`${dbResponse.id} created`)
        res.status(202).send(`http://${HOST}:${PORT}/result/${data.id}`)
        await axios.post(`http://${RUNNER_HOST}:${RUNNER_PORT}/run`, data)

    } catch (e) {
        console.log(e)
        res.status(500).send(errorResponse(e.code, e.message))
    }
})

router.get('/result/:id', async (req, res) => {
    const data = await Job.findOne({id: req.params.id}, {
        _id: 0,
        __v: 0
    })
    res.status(200).send(data)
})

exports.router = router

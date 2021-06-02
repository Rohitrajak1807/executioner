const router = require('express').Router()
const {Job} = require('../models/job')
const {jobState} = require('../utils/general')

router.post('/run', async (req, res) => {
    const data = req.body
    console.log(data.src, data.stdin, data.lang, data.id)
    res.send(`I got this.`)
    const filter = {id: data.id}
    const update = {state: jobState.finished}
    await Job.findOneAndUpdate(filter, update)
})

exports.router = router

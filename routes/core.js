const express = require('express')
const router = express.Router()
const {newRandomUid} = require('../utils/general')

router.post('/submit', async (req, res) => {
    const data = {
        src: req.body.src,
        stdin: req.body.input,
        lang: req.body.lang,
        id: newRandomUid()
    }
    try {
        // runTheCode
    } catch (e) {

    }
})

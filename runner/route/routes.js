const router = require('express').Router()

router.post('/run', (req, res) => {
    const {src, stdin, lang, id} = req.body
    console.log(src, stdin, lang, id)
    res.send(`I got this.`)
})

exports.router = router

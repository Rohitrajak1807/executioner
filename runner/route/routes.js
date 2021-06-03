const router = require('express').Router()
const {Job} = require('../models/job')
const {jobState, run} = require('../utils/general')
const os = require('os')
const path = require('path')
const {lang} = require('../utils/lang')
const BASE_DIR = os.tmpdir()
const {mkDir, writeFile, readFile, rmDir} = require('../utils/fs-utils')

router.post('/run', async (req, res) => {
    const data = req.body
    console.log(data.src, data.stdin, data.lang, data.id)
    res.send(`I got this.`)
    const dir = path.join(BASE_DIR, data.id)
    const srcFile = `src.${lang[data.lang]}`
    const inputFile = `input.txt`
    const outputFile = `out.txt`
    try {
        const runCmd = `python run.py ${data.id} ${srcFile} ${data.lang}`
        await Promise.all([mkDir(dir),
            writeFile(dir, srcFile, data.src.toString()),
            writeFile(dir, inputFile, data.stdin.toString()),
            run(runCmd)
        ])
        const outData = await readFile(path.join(dir, outputFile))
        const result = {
            output: outData,
            stderr: outData.stderr,
            status: outData.stdout
        }
        console.log(result)
        const filter = {id: data.id}
        const update = {state: jobState.finished, output: result.output, stderr: result.stderr}
        await Job.findOneAndUpdate(filter, update)
        await rmDir(dir)
    } catch (e) {
        console.log(e)
    }
})

exports.router = router

const express = require('express')
const router = express.Router({mergeParams: true})
const { Team } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
        const teams = await Team.find({})
        res.json(teams)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
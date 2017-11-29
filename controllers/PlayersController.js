const express = require('express')
const router = express.Router({mergeParams: true})
const { Player } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
        const players = await Player.find({})
        res.json(players)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const player = await Player.findById(req.params.id)
        res.json(player)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;
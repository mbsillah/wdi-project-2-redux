const express = require('express')
const router = express.Router({ mergeParams: true })
const { Player } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
        const players = await Player.find({})
        res.json(players)
    } catch (error) {
        res.send(error)
    }
})

router.post('/new', async (req, res) => {
    try {
        const newPlayer = new Player(req.body.player)
        const saved = await newPlayer.save()
        res.json(saved)
    } catch (error) {
        res.send(error)
    }
})

router.put('/:id/edit', async (req, res) => {
    try {
        const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body.player, { new: true })
        res.json(updatedPlayer)
    } catch (err) {
        res.send(err)
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
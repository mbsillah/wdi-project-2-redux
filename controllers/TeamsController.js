const express = require('express')
const router = express.Router({mergeParams: true})
const { Team, Player } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
        const teams = await Team.find({})
        res.json(teams)
    } catch (error) {
        res.send(error)
    }
})

router.post('/new', async (req, res) => {
    try {
        const currentPlayer = await Player.findById(req.params.playerId)
        const newTeam = await new Team(req.body.team).save()
        await currentPlayer.teams.push(newTeam)
        const saved = await currentPlayer.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

router.put('/:id/edit', async (req, res) => {
    try {
        const updatedUser = await Team.findByIdAndUpdate(req.params.id, req.body.user, { new: true })
        res.json(updatedUser)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id/delete', async (req, res) => {
    try {
        const deletedTeam = await Team.findByIdAndRemove(req.params.id)
        res.json(deletedUser)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const team = await Team.findById({})
        res.json(team)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router
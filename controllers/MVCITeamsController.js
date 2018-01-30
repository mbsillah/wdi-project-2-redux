const express = require('express')
const router = express.Router({mergeParams: true})
const { MVCITeam, Player } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
        const teams = await MVCITeam.find({})
        res.json(teams)
    } catch (error) {
        res.send(error)
    }
})

router.post('/new', async (req, res) => {
    try {
        const currentPlayer = await Player.findById(req.params.playerId)
        const newTeam = await new MVCITeam(req.body.team).save()
        await currentPlayer.mvciTeams.push(newTeam)
        const saved = await currentPlayer.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

router.put('/:id/edit', async (req, res) => {
    try {
        const currentTeamId = req.params.id
        const playerId = req.params.playerId
        await Player.findById(playerId, (err, player) => {
            if (!err) {
                player.mvciTeams.id(currentTeamId).set(req.body.team)
                player.save()
            }
        })
        const updatedTeam = await MVCITeam.findByIdAndUpdate(currentTeamId, req.body.team, { new: true })
        res.json(updatedUser)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id/delete', async (req, res) => {
    try {
        const currentTeamId = req.params.id
        const playerId = req.params.playerId
        await Player.findById(playerId, (err, player) => {
            if (!err) {
                player.mvciTeams.id(currentTeamId).remove()
                player.save()
            }
        })
        const deletedTeam = await MVCITeam.findByIdAndRemove(currentTeamId)
        res.json(deletedTeam)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const team = await MVCITeam.findById({})
        res.json(team)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router
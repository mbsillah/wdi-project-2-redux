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

router.post('/new', async (req, res) => {
    try {
        console.log(req.body)
        const newTeam = new Team(req.body.team)
        const saved = await newTeam.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

router.put('/:id/edit', async (req, res) => {
    try {
        console.log(req.body)
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body.user, { new: true })
        res.json(updatedUser)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id/delete', async (req, res) => {
    try {
        console.log(req.body)
        const deletedUser = await User.findByIdAndRemove(req.params.id)
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
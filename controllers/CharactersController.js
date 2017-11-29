const express = require('express')
const router = express.Router({mergeParams: true})
const { Character } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
        const characters = await Character.find({})
        res.json(characters)
    } catch (error) {
        res.send(error)
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

module.exports = router;
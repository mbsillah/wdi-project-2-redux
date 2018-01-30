const express = require('express')
const router = express.Router({mergeParams: true})
const { MVCICharacter } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
        const characters = await MVCICharacter.find({})
        res.json(characters)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const character = await MVCICharacter.findById(req.params.id)
        res.json(character)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
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

router.get('/:id', async (req, res) => {
    try {
        const character = await Character.findById(req.params.id)
        res.json(character)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
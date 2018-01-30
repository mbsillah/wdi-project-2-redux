require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
mongoose.Promise = global.Promise

const { MVCICharacter } = require('./schema')
const mvciCharacters = require('./mvciCharacters')

MVCICharacter.remove({}, (err) => {
    console.log(err)
})

mvciCharacters.forEach(async (character) => {
    await character.save()
    console.log(`${character.name} saved!`)
    mongoose.connection.close();
})
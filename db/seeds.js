require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
mongoose.Promise = global.Promise

const { Player, Character, Team } = require('./schema')
const characters = require('./characters')

Player.remove({}, (err) => {
    console.log(err);
})
Character.remove({}, (err) => {
    console.log(err);
})
Team.remove({}, (err) => {
    console.log(err)
})

const characterOne = characters.filter((character) => {
    return character.name === "Magneto"
})
const characterTwo = characters.filter((character) => {
    return character.name === "Doctor Doom"
})
const characterThree = characters.filter((character) => {
    return character.name === "Amaterasu"
})


const characterFour = characters.filter((character) => {
    return character.name === "Dante"
})
const characterFive = characters.filter((character) => {
    return character.name === "Deadpool"
})
const characterSix = characters.filter((character) => {
    return character.name === "Doctor Doom"
})


const musa = new Player({ firstName: "Musa", lastName: "Sillah", gamertag: `GB | Musa`, img: `https://i.imgur.com/Tf2Z9dj.jpg`, twitter: "twitter.com/MusaFGC" })
const myTeam = new Team({ name: "Follow My Lead", characterOne: characterOne, characterTwo: characterTwo, characterThree: characterThree })
const secondTeam = new Team({ name: "Barely Played It", characterOne: characterFour, characterTwo: characterFive, characterThree: characterSix })
musa.teams = [myTeam, secondTeam]

myTeam.save()
    .then((team) => {
        console.log(`${team.name} saved`)
    })
    .catch((error) => {
        console.log(error)
    })

secondTeam.save()
    .then((team) => {
        console.log(`${team.name} saved`)
    })
    .catch((error) => {
        console.log(error)
    })

musa.save()
    .then((player) => {
        console.log(`Musa saved!`)
    })
    .catch((error) => {
        console.log(error)
    })


 characters.forEach( async (character) => {
    await character.save()
    console.log(`${character.name} saved!`)
    mongoose.connection.close();
})

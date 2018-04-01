require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
//mongoose.connect("mongodb://heroku_ggxvwf3j:glsk8q3c03lh1dtoaebt87472l@ds123976.mlab.com:23976/heroku_ggxvwf3j")
mongoose.Promise = global.Promise

const { Player, Character, MVCICharacter, Team, MVCITeam } = require('./schema')
const characters = require('./characters')
const mvciCharacters = require('./mvciCharacters')

Player.remove({}, (err) => {
    console.log(err);
})
Character.remove({}, (err) => {
    console.log(err);
})
MVCICharacter.remove({}, (err) => {
    console.log(err);
})
Team.remove({}, (err) => {
    console.log(err)
})
MVCITeam.remove({}, (err) => {
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



const character7 = mvciCharacters.filter((character) => {
    return character.name === "Nova"
})

const character8 = mvciCharacters.filter((character) => {
    return character.name === "Jedah"
})



const character9 = mvciCharacters.filter((character) => {
    return character.name === "Captain Marvel"
})

const character10 = mvciCharacters.filter((character) => {
    return character.name === "Ultron"
})


const musa = new Player({ firstName: "Musa", lastName: "Sillah", gamertag: `GB | Musa`, img: `https://i.imgur.com/Tf2Z9dj.jpg`, twitter: "MusaFGC" })
const myTeam = new Team({ nickname: "Follow My Lead", characterOne: characterOne, characterTwo: characterTwo, characterThree: characterThree })
const secondTeam = new Team({ nickname: "Barely Played It", characterOne: characterFour, characterTwo: characterFive, characterThree: characterSix })
const firstMvciTeam = new MVCITeam({ nickname: "Day 1", characterOne: character9, characterTwo: character10, infinityStone: "Reality Stone" })
const secondMvciTeam = new MVCITeam({ nickname: "Current Team", characterOne: character7, characterTwo: character8, infinityStone: "Space Stone" })
musa.teams = [myTeam, secondTeam]
musa.mvciTeams = [firstMvciTeam, secondMvciTeam]

myTeam.save()
    .then((team) => {
        console.log(`${team.nickname} saved`)
    })
    .catch((error) => {
        console.log(error)
    })

secondTeam.save()
    .then((team) => {
        console.log(`${team.nickname} saved`)
    })
    .catch((error) => {
        console.log(error)
    })

firstMvciTeam.save()
    .then((team) => {
        console.log(`${team.nickname} saved`)
    })
    .catch((error) => {
        console.log(error)
    })

secondMvciTeam.save()
    .then((team) => {
        console.log(`${team.nickname} saved`)
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


const saveCharacters = (umvc3, mvci) => {
    umvc3.forEach(async (character) => {
        await character.save()
        console.log(`${character.name} saved!`)
    })
    mvci.forEach(async (character) => {
        await character.save()
        console.log(`${character.name} saved!`)
        db.close()
    })
    mongoose.connection.close();
}

saveCharacters(characters ,mvciCharacters);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: String,
    img: String
});

const MVCICharacterSchema = new Schema({
    name: String,
    img: String
});

const TeamSchema = new Schema({
    nickname: String,
    characterOne: [CharacterSchema],
    characterTwo: [CharacterSchema],
    characterThree: [CharacterSchema]
})

const MVCITeamSchema = new Schema({
    nickname: String,
    characterOne: [MVCICharacterSchema],
    characterTwo: [MVCICharacterSchema],
    infinityStone: String
})

const PlayerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gamertag: {
        type: String,
        required: true
    },
    img: String,
    twitter: String,
    teams: [TeamSchema],
    mvciTeams: [MVCITeamSchema]
});

const Player = mongoose.model('Player', PlayerSchema);
const Character = mongoose.model('Character', CharacterSchema);
const MVCICharacter = mongoose.model('MVCICharacter', MVCICharacterSchema);
const Team = mongoose.model('Team', TeamSchema);
const MVCITeam = mongoose.model('MVCITeam', MVCITeamSchema);

module.exports = {
    Player, Character, MVCICharacter, Team, MVCITeam
}
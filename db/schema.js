const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: String,
    img: String
});

const TeamSchema = new Schema({
    nickname: String,
    characterOne: [CharacterSchema],
    characterTwo: [CharacterSchema],
    characterThree: [CharacterSchema]
})

const PlayerSchema = new Schema({
    firstName: String,
    lastName: String,
    gamertag: String,
    img: String,
    twitterHandle: String,
    teams: [TeamSchema]

});

const Player = mongoose.model('Player', PlayerSchema);
const Character = mongoose.model('Character', CharacterSchema);
const Team = mongoose.model('Team', TeamSchema);

module.exports = {
    Player, Character, Team
}
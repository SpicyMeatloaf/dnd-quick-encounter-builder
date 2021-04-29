const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const creatureSchema = new Schema({
    name: {type: String},
    hitPoints: {type: String},
    armorClass: {type: Number},
    attacks: {type: String},
    abilityScores: [Number],
    defenses: {type: String},
    details: {type: String},
    experience: {type: String},
});

module.exports = mongoose.model("Creature", creatureSchema);
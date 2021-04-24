const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const creatureSchema = new Schema({
    name: {type: String},
    hitPoints: {type: String},
    armorClass: {type: Number},
    attacks: {type: String},
    strength: {type: String},
    dexterity: {type: String},
    constitution: {type: String},
    intelligence: {type: String},
    wisdom: {type: String},
    charisma: {type: String},
    defenses: {type: String},
    details: {type: String},
    experience: {type: String},
});

module.exports = mongoose.model("Creature", creatureSchema);
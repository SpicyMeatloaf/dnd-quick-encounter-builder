const Creature = require("../models/creature");

module.exports = {
  index,
  new: newCreature,
  create,
};


function index(req, res) {
    Creature.find({}, function (err, creatures) {
      res.render("creatures/index", { title: "All Creatures", creatures });
    });
  }




  function newCreature(req, res) {
    res.render("creatures/new", { title: "Add Creature" });
  }
  
  function create(req, res) {

    // console.log(req.body);
  
    Creature.create(req.body, function (err, creature) {
      if (err) {
        // console.log(err);
        return res.redirect("/home/new");
      }
      res.redirect("/home");
    });
  }
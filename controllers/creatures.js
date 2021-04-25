const Creature = require("../models/creature");

module.exports = {
  index,
  new: newCreature,
  details,
  create,
  delete: deleteCreature,
  edit,
  update,
};


function index(req, res) {
    Creature.find({}, function (err, creatures) {
      res.render("creatures/index", { title: "All Creatures", creatures });
    });
  }

function details(req, res) {
  Creature.findById(req.params.id, function(err, creature){
    res.render('creatures/details', {
      title: "Creature Details",
      creature,
      creatureId: req.params.id,
    })
  });
}

function newCreature(req, res) {
  res.render("creatures/new", { title: "Add Creature" });
}
  
function create(req, res) {
  Creature.create(req.body, function (err, creature) {
    if (err) {
      // console.log(err);
      return res.redirect("/home/new");
    }
    res.redirect("/home");
  });
}

function deleteCreature(req, res) {
  Creature.findByIdAndDelete(req.params.id, function(err, menu) {
    // res.redirect to home page
    res.redirect('/home');
  });
}

function edit(req, res) {
  Creature.findById(req.params.id, function(err, creature){

  console.log(creature);
    res.render('creatures/edit', {
      title: "Edit Creature",
      creature,
      creatureId: req.params.id,
    })
  });
}

function update(req, res) {
  Creature.findByIdAndUpdate(req.params.id, req.body,
  function (err) {
    if (err){
      console.log(err)
    }
    else{
      res.redirect('/home');
    }
  });
}
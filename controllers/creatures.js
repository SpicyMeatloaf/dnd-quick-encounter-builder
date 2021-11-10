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
      res.render("creatures/index", { 
        title: "The Loremaster's Board", 
        creatures,
        user: req.user
      });
    });
  }

function details(req, res) {
  Creature.findById(req.params.id, function(err, creature){
    res.render('creatures/details', {
      title: "The Loremaster's Board - Creature Details",
      creature,
      creatureId: req.params.id,
      user: req.user
    })
  });
}

function newCreature(req, res) {
  res.render("creatures/new", { 
    title: "The Loremaster's Board - Post a Creature",
    user: req.user
  });
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
      title: "The Loremaster's Board - Edit",
      creature,
      creatureId: req.params.id,
      user: req.user
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
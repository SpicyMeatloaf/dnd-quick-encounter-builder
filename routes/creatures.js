const express = require('express');
const router = express.Router();
const creatureCtrl = require('../controllers/creatures');

router.get('/', creatureCtrl.index);
router.get('/new', creatureCtrl.new);
// router.get('/:id', creatureCtrl.show);
router.post('/', creatureCtrl.create);

module.exports = router;

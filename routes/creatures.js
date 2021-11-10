const router = require('express').Router();
const creatureCtrl = require('../controllers/creatures');

router.get('/', creatureCtrl.index);
router.get('/new', creatureCtrl.new);
router.get('/:id', creatureCtrl.details);
router.post('/', creatureCtrl.create);
router.delete('/:id', creatureCtrl.delete);
router.get('/:id/edit', creatureCtrl.edit);
router.put('/:id', creatureCtrl.update);

module.exports = router;

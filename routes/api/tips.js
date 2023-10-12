const express = require('express');
const router = express.Router();
const tipsCtrl = require('../../controllers/api/tips');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, tipsCtrl.index);
router.post('/', ensureLoggedIn, tipsCtrl.create);
router.post('/:id', ensureLoggedIn, tipsCtrl.update);
router.delete('/:id', ensureLoggedIn, tipsCtrl.delete);
router.get('/:id', ensureLoggedIn, tipsCtrl.edit);

module.exports = router;
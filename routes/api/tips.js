const express = require('express');
const router = express.Router();
const tipsCtrl = require('../../controllers/api/tips');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, tipsCtrl.index);
router.post('/new', ensureLoggedIn, tipsCtrl.addTips);
router.post('/updatetips', ensureLoggedIn, tipsCtrl.updateTips);
router.delete('/deleteTips/:id', ensureLoggedIn, tipsCtrl.deleteTips);
router.get('/:id/edit', ensureLoggedIn, tipsCtrl.edit);

module.exports = router;
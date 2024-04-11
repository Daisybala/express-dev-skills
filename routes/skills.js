const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new);

router.get('/:id', skillsCtrl.show);


module.exports = router;

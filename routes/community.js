const express = require('express');
const router = express.Router();

const communityCtrl = require('../controllers/community');

// GET /community/new - New Movie Route
router.get('/new', communityCtrl.new);

// POST /community - Create Route
router.post('/', communityCtrl.create);

// GET /community - Index Route
router.get('/', communityCtrl.index);

// GET /movies/:id - Show Route - the show route MUST ALWAYS GO LAST
router.get('/:id', communityCtrl.show);

module.exports = router;
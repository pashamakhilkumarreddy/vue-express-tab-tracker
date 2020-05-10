const router = require('express').Router();

const { getSongs, addSong } = require('../controllers');

router.post('/songs', addSong);

router.get('/songs', getSongs);

module.exports = router;

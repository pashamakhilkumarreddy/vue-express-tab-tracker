const router = require('express').Router();

const {
  getSongs,
  getSong,
  addSong,
  editSong,
} = require('../controllers');

router.post('/songs', addSong);

router.get('/songs', getSongs);

router.get('/songs/:id', getSong);

router.put('/songs/:id', editSong);

module.exports = router;

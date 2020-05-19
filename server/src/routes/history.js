const router = require('express').Router();

const {
  getRecentlyViewedSongs,
  setSongAsRecentlyViewed,
} = require('../controllers');

router.get('/history', getRecentlyViewedSongs);

router.post('/history', setSongAsRecentlyViewed);

module.exports = router;

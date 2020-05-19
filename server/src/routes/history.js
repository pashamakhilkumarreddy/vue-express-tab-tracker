const router = require('express').Router();

const {
  isAuthenticated,
} = require('../policies');

const {
  getRecentlyViewedSongs,
  setSongAsRecentlyViewed,
} = require('../controllers');

router.get('/history', isAuthenticated, getRecentlyViewedSongs);

router.post('/history', isAuthenticated, setSongAsRecentlyViewed);

module.exports = router;

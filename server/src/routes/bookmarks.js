const router = require('express').Router();

const {
  isAuthenticated,
} = require('../policies');

const {
  getBookmarks,
  addBookmark,
  deleteBookmark,
} = require('../controllers');

router.get('/bookmarks', isAuthenticated, getBookmarks);

router.post('/bookmarks', isAuthenticated, addBookmark);

router.delete('/bookmarks/:id', isAuthenticated, deleteBookmark);

module.exports = router;

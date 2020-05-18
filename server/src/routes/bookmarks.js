const router = require('express').Router();

const {
  getBookmarks,
  addBookmark,
  deleteBookmark,
} = require('../controllers');

router.get('/bookmarks', getBookmarks);

router.post('/bookmarks', addBookmark);

router.delete('/bookmarks/:id', deleteBookmark);

module.exports = router;

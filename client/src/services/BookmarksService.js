import Api from './Api';

export default {
  getBookmarks({ songId, userId }) {
    return Api().get('bookmarks', {
      params: {
        songId,
        userId,
      },
    });
  },
  addBookmark(bookmark) {
    return Api().post('bookmarks', {
      params: {
        ...bookmark,
      },
    });
  },
  deleteBookmark(bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`);
  },
};

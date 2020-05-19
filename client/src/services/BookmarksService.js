import Api from './Api';

export default {
  getBookmarks({ songId = null } = { songId: null }) {
    return Api().get('bookmarks', {
      params: {
        songId,
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
  deleteBookmark({ bookmarkId }) {
    return Api().delete(`bookmarks/${bookmarkId}`);
  },
};

import Api from './Api';

import {
  bookmarks,
} from '../utils/urls';

export default {
  getBookmarks({ songId = null } = { songId: null }) {
    return Api().get(bookmarks, {
      params: {
        songId,
      },
    });
  },
  addBookmark(bookmark) {
    return Api().post(bookmarks, {
      params: {
        ...bookmark,
      },
    });
  },
  deleteBookmark({ bookmarkId }) {
    return Api().delete(`${bookmarks}/${bookmarkId}`);
  },
};

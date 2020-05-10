import actions from './actions';

export const state = {
  posts: [],
  postsLoading: false,
  commentsLoading: false,
  selectedPost: null,
  page: 1,
  perPage: 5,
  total: 5,
  editMode: false,
  ...actions,
};

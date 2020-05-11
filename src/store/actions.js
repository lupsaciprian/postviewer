import state from "./state";

const baseUrl = "http://jsonplaceholder.typicode.com";

export const fetchPosts = () => {
  state.postsLoading = true;
  const startingPoint = (state.page - 1) * state.perPage;
  fetch(`${baseUrl}/posts?_start=${startingPoint}&_limit=${state.perPage}`)
    .then((response) => response.json())
    .then((posts) => {
      state.postsLoading = false;
      state.posts = posts;

      if (posts.length > 0 && state.perPage * state.page >= state.total) {
        // This adds another pagination button and prevents adding an new page if i select a previous page
        state.total += state.perPage;
      }
    });
};

export const selectPost = (post) => {
  state.selectedPost = post;
  state.editMode = false;
};

export const setPage = (page) => {
  state.selectedPost = null;
  state.page = page;
  fetchPosts();
};

export const toggle = (key) => {
  if (typeof state[key] === "boolean") state[key] = !state[key];
};

export const deletePost = () => {
  state.selectedPost.deleted = true;
  state.selectedPost = state.posts.find((post) => !post.deleted);

  // Delete api request here
};
export const setSelectedPostValue = (field, value) => {
  state.selectedPost[field] = value;
  console.log(state.selectedPost[field]);
};

export const fetchComments = () => {
  state.editMode = false;
  if (!state.selectedPost.comments) {
    state.commentsLoading = true;
    fetch(
      `${baseUrl}/posts/${state.selectedPost.id}/comments?_start=0&_limit=${state.perPage}`
    )
      .then((response) => response.json())
      .then((comments) => {
        state.commentsLoading = false;
        state.selectedPost.comments = comments;
      });
  }
};

export const allActions = {
  fetchPosts,
  selectPost,
  setPage,
  deletePost,
  setSelectedPostValue,
  fetchComments,
};

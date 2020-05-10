export default {
  getPosts() {
    this.toggle('postsLoading');
    const startingPoint = (this.page - 1) * this.perPage;
    const url = `http://jsonplaceholder.typicode.com/posts?_start=${startingPoint}&_limit=${this.perPage}`;
    fetch(url)
      .then((response) => response.json())
      .then((posts) => {
        this.toggle('postsLoading');
        this.posts = posts;

        if (posts.length > 0) this.total += this.perPage;
      });
  },
  setSelectedPost(post) {
    this.selectedPost = post;
    this.editMode = false;
  },
  setPage(page) {
    this.page = page;
    this.getPosts();
  },

  deletePost() {
    this.selectedPost.deleted = true;
    this.selectedPost = this.posts.find((post) => !post.deleted);

    // Delete api request here
  },
  setSelectedValue(field, value) {
    this.selectedPost[field] = value;
  },

  toggle(propertyName) {
    if (typeof this[propertyName] === 'boolean')
      this[propertyName] = !this[propertyName];
  },

  loadComments() {
    if (!this.selectedPost.comments) {
      this.editMode = false;
      this.commentsLoading = true;
      fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.selectedPost.id}/comments?_start=0&_limit=${this.perPage}`
      )
        .then((response) => response.json())
        .then((comments) => {
          this.commentsLoading = false;
          this.selectedPost = { ...this.selectedPost, comments };
        });
    }
  },
};

import posts from '__fixtures__/posts.json'

const getPosts = async (__, res) => res.status(200).json(posts)

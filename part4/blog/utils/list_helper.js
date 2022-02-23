const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const likesList = blogs.map(blog => blog.likes)
  const likesTotal = likesList.reduce((sum, likes) => sum + likes, 0)
  return likesTotal
}

const favoriteBlog  = (blogs) => {
  if (blogs.length === 0) {
    return {}
  }

  const mostLikedBlog = blogs.reduce((max, blog) => max.votes > blog.votes ? max : blog)
  return mostLikedBlog
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}

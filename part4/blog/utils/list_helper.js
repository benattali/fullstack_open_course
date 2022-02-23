const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const likesList = blogs.map(blog => blog.likes)
  const likesTotal = likesList.reduce((sum, likes) => sum + likes, 0)
  return likesTotal
}

module.exports = {
  dummy,
  totalLikes
}

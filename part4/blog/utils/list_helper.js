const _ = require("lodash")

const dummy = () => {
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

const mostBlogs = (blogs) => {
  let tally = _.reduce(blogs, (total, next) => {

    total[next.author] = (total[next.author] || 0) + 1

    return total
  }, {})

  const name = _.keys(tally)[0]
  const numBlogs = _.values(tally)[0]

  return { author: name, blogs: numBlogs }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}

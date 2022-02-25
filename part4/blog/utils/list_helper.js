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

const mostLikes = (blogs) => {
  const authorTotalLikes = {}
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].author in authorTotalLikes) {
      authorTotalLikes[blogs[i].author] += blogs[i].likes
    } else {
      authorTotalLikes[blogs[i].author] = blogs[i].likes
    }
  }

  const mostLikes = _.max(_.values(authorTotalLikes))
  const author = Object.keys(authorTotalLikes).find(key => authorTotalLikes[key] === mostLikes)

  return { author, likes: mostLikes }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}

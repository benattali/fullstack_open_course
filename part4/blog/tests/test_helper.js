const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  {
    title: 'first blog',
    author: 'me and i',
    url: 'www.google.ca',
    likes: 10
  },
  {
    title: 'blog 2',
    author: 'me and i',
    url: 'www.google.co.il',
    likes: 20
  }
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialBlogs, blogsInDb, usersInDb
}

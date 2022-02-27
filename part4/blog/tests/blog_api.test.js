const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

beforeEach(async () => {
  await Blog.deleteMany({})

  const blogObjects = helper.initialBlogs
    .map(blog => new Blog(blog))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})

test('notes are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all notes are returned', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body).toHaveLength(helper.initialBlogs.length)
})

test('unique identifier is called id', async () => {
  const response = await api.get('/api/blogs')
  const firstBlog = response.body[0]

  expect(firstBlog.id).toBeDefined()
})

test('a valid blog can be added', async () => {
  const newBlog = {
    title: 'new blog to post',
    author: 'post request',
    url: 'www.api.post.request',
    likes: 2
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

  const contents = blogsAtEnd.map(blog => blog.title)
  expect(contents).toContain(
    'new blog to post'
  )
})

test('the likes property defaults to 0', async () => {
  const newBlog = {
    title: 'new blog to post',
    author: 'post request',
    url: 'www.api.post.request'
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()

  expect(blogsAtEnd.slice(-1)[0].likes).toEqual(0)
})

test('a blog without title and url is not added', async () => {
  const newBlog = {
    author: 'post request',
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)

  const blogsAtEnd = await helper.blogsInDb()

  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
})

afterAll(() => {
  mongoose.connection.close()
})

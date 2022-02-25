const listHelper = require("../utils/list_helper")

describe("list_helper", () => {
  test("dummy returns one", () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
  })

  describe("totalLikes", () => {
    test("when a list greater than 1", () => {
      const blogs = [{ title: "title", likes: 2 }, { title: "title", likes: 3 }]

      const result = listHelper.totalLikes(blogs)
      expect(result).toBe(5)
    })

    test("when a list greater is 1", () => {
      const blogs = [{ title: "title", likes: 2 }]

      const result = listHelper.totalLikes(blogs)
      expect(result).toBe(2)
    })

    test("when empty list", () => {
      const blogs = []

      const result = listHelper.totalLikes(blogs)
      expect(result).toBe(0)
    })
  })

  describe("favoriteBlog", () => {
    test("when a list greater than 1", () => {
      const blogs = [{ title: "title", likes: 2 }, { title: "dif title", likes: 3 }]

      const result = listHelper.favoriteBlog(blogs)
      expect(result).toEqual({ title: "dif title", likes: 3 })
    })

    test("when a list greater is 1", () => {
      const blogs = [{ title: "title", likes: 2 }]

      const result = listHelper.favoriteBlog(blogs)
      expect(result).toEqual({ title: "title", likes: 2 })
    })

    test("when empty list", () => {
      const blogs = []

      const result = listHelper.favoriteBlog(blogs)
      expect(result).toEqual({})
    })
  })

  describe("mostBlogs", () => {
    test("when a list greater than 1", () => {
      const blogs = [{ title: "title", likes: 2, author: "ben" }, { title: "dif title", likes: 3, author: "ben" }, { title: "t", likes: 10, author: "someone else" }]

      const result = listHelper.mostBlogs(blogs)
      expect(result).toEqual({ author: "ben", blogs: 2 })
    })

    test("when a list greater is 1", () => {
      const blogs = [{ title: "title", likes: 2, author: "ben" }]

      const result = listHelper.mostBlogs(blogs)
      expect(result).toEqual({ author: "ben", blogs: 1 })
    })

    test("when empty list", () => {
      const blogs = []

      const result = listHelper.mostBlogs(blogs)
      expect(result).toEqual({})
    })
  })

  describe("mostBlogs", () => {
    test("when a list greater than 1", () => {
      const blogs = [{ title: "title", likes: 2, author: "ben" }, { title: "dif title", likes: 3, author: "ben" }, { title: "t", likes: 10, author: "someone else" }]

      const result = listHelper.mostLikes(blogs)
      expect(result).toEqual({ author: "someone else", likes: 10 })
    })

    test("when author has multiple blogs", () => {
      const blogs = [{ title: "title", likes: 2, author: "ben" }, { title: "dif title", likes: 3, author: "ben" }, { title: "t", likes: 10, author: "someone else" }, { title: "test", likes: 13, author: "ben" }]

      const result = listHelper.mostLikes(blogs)
      expect(result).toEqual({ author: "ben", likes: 18 })
    })

    test("when a list greater is 1", () => {
      const blogs = [{ title: "title", likes: 2, author: "ben" }]

      const result = listHelper.mostLikes(blogs)
      expect(result).toEqual({ author: "ben", likes: 2 })
    })

    test("when empty list", () => {
      const blogs = []

      const result = listHelper.mostLikes(blogs)
      expect(result).toEqual({})
    })
  })
})

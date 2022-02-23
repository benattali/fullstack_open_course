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
})

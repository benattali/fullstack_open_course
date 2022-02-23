require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const blogsRouter = require("./controllers/blogs")
const logger = require("./utils/logger")
const mongoose = require("mongoose")

// eslint-disable-next-line no-undef
logger.info("connecting to", process.env.MONGODB_URI)

// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB")
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message)
  })

app.use(cors())
app.use(express.json())

app.use("/api/blogs", blogsRouter)

module.exports = app

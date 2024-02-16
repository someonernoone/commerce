const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: "config/config.env"})

const mongoUrl = process.env.MONGO_URL

const mongodb = async () => {
  mongoose.connect(mongoUrl)
}
module.exports = mongodb
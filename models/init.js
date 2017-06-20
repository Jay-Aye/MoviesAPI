const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost')

const db = mongoose.connection

module.exports = mongoose

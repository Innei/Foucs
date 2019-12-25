const { model, Schema } = require('mongoose')

const schema = new Schema({
  slug: {
    type: String,
    required: true,
    trim: true,
    index: 1
  },
  created: {
    type: Date,
    default: new Date()
  },
  modified: {
    type: Date,
    default: new Date()
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    // md html iframe
    default: 'md'
  }
})

module.exports = model('Page', schema)

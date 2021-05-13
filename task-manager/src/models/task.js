const mongoose = require("mongoose")
const User = require("./user")

const taskSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

taskSchema.pre('save', async function () {
  console.log("bafore saving task")
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
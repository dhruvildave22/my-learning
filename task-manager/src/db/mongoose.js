const mongoose = require("mongoose")
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-api'


mongoose.connect(`${connectionURL}/${databaseName}`, {
  useNewUrlParser: true,
  useCreateIndex: true
})
const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})


const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

const task = new Task({
  description: "wash clothes",
  completed: true
})

task.save().then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)
})

// const me = new User({
//   name: "Dhruvil Dave",
//   age: 23
// })

// me.save().then(() => {
//   console.log(me)
// }).catch(() => {
//   console.log("Error", error)
// })
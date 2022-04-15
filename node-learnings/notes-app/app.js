const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.1.0')


yargs.command({
  command: 'add',
  description: 'Add a new one...',
  builder: {
    title: {
      describe: 'Note title...',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body...',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log("Title: " + argv.title + ", Body: " + argv.body)
  }
})

yargs.command({
  command: 'remove',
  description: 'Remove a new one...',
  handler: function () {
    console.log("Removing a new note!")
  }
})

yargs.command({
  command: 'list',
  description: 'List your notes',
  handler: function () {
    console.log("Listing out all notes!")
  }
})

yargs.command({
  command: 'read',
  description: 'Read a note',
  handler: function () {
    console.log("Reading a note")
  }
})

yargs.parse()
// console.log(yargs.argv)
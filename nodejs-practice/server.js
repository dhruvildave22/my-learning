const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient

const app = express();

const connectionString = "mongodb+srv://dhruvildave:dhruvildave@cluster0.fvqtl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {

    app.set('view engine', 'ejs')

    app.use(express.static('public'))


    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')


    app.use(bodyParser.urlencoded({ extended: true }))
    app.listen(3000, function () {
      console.log('listening on 3000')
    })

    app.get('/', (req, res) => {

      db.collection('quotes').find().toArray()
        .then(results => {
          res.render('index.ejs', { quotes: results })
        })
        .catch(error => console.error(error))

    })


    app.post('/quotes', (req, res) => {
      quotesCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })

    // app.post('/quotes', (req, res) => {
    //   console.log(req.body)

    //   console.log('Hellooooooooooooooooo!')
    // })
  })
  .catch(error => console.error(error))




// app.get('/', (req, res) => {
//   res.send('Hello World')
// })



const express=require('express');
const bodyParser= require('body-parser')
const mongoose=require('mongoose')
const MongoClient=require('mongodb').MongoClient
const app=express();

app.use(bodyParser.urlencoded({ extended: true }))



    // if(err) return console.error(err)
    // console.log('Connected to Database')



app.listen(3000, function()
{
console.log('listening on 3000')

})

MongoClient.connect('mongodb+srv://lathatest:lathu@cluster0.efimswg.mongodb.net/?retryWrites=true&w=majority',{ useUnifiedTopology: true })
   
.then(client => {
    console.log('Connected to Database')
    const db=client.db('Latha-war-quotes')
    const quocollection=db.collection('add')

    app.post('/add', (req, res) => {
        const quocollection=db.collection('add')
        .insertOne(req.body)
          .then(result => {
            console.log(result)
          })
          .catch(error => console.error(error))
      })





app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/add', (req, res) =>
{
    console.log('hiiii')
})

app.post('/add', (req, res) =>
{
    console.log('req.body')
})
}).catch(console.error)


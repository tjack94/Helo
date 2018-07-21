const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const helmet = require('helmet')
const session = require('express-session')
require('dotenv').config()

const controller = require('./server/controller')
const app = express()
app.use(helmet())

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}))
app.use(bodyParser.json())
massive(process.env.DB_CONNECTION_STRING).then( db => {
    console.log("db Connected")
    app.set('db', db);
  })
  


app.post('/api/new-user', controller.createUser)
app.post('/api/login', controller.loginUser)
app.get('/api/posts', controller.getPosts)
app.get('/api/post/:id', controller.getSinglePost)
app.post('/api/newpost', controller.newPost)
app.post('/api/auth/logout', (req, res, next)=> req.session.destroy)
app.get('/api/auth/me', controller.userInfo)

port = 3005

app.listen(port, ()=> console.log(`listening on port ${port}`))
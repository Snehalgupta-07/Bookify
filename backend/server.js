
require('dotenv').config()
const authRoutes = require('./routes/authroutes');
const { requireAuth,checkUser } = require('./middleware/authMiddleware');

const express = require('express')
const mongoose =require('mongoose')

//express app
const app = express();

//middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


//routes
app.use('/api/event_m',authRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=> {
// listen for requests
app.listen(process.env.PORT, () => {
    console.log('Connected to Database and listening on port', process.env.PORT)
  })
})
.catch((error) => {
    console.log(error)
})


app.get('*', checkUser);
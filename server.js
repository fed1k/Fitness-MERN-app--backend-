require('dotenv').config()
const express = require('express')
const workouts = require('./routes/workouts')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/user')
// Express app
const app = express();

app.use(express.json())
app.use(cors())

// Routes
app.use('/api/workouts', workouts)
app.use('/api/user', userRoutes)

// Connect to the db
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    app.listen(process.env.PORT, ()=>{
      console.log('Server listening on', process.env.PORT);
    })
  })
  .catch((error)=>{
    console.log(error)
  })
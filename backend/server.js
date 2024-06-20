require('dotenv').config();
const authRoutes = require('./routes/authroutes');
const bookRoutes = require('./routes/bookroutes');
const cartRoutes = require('./routes/cartroutes');
const wishRoutes =require('./routes/wishroutes');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const express = require('express');
const mongoose = require('mongoose');

// express app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// routes
app.use('/api/event_m', authRoutes);  
app.use('/api/event_m', bookRoutes);  
app.use('/api/event_m/cart', cartRoutes);  
app.use('/api/event_m/wish', wishRoutes);  


// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Connected to Database and listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.error(error);
  });

app.get('*', checkUser);

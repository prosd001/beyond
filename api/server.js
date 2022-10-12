const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const logger = require('morgan');
const authRoute = require('./routes/auth.route')
const articaleRoute = require('./routes/articale.route')
const listsRoute = require('./routes/lists.route')
// const corsOptions = require("./config/cors.config.js");

// Constants
const PORT = process.env.PORT || 8000;

const app = express();

// Configurations
dotenv.config();

// Middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


// Routes
app.use('/api', authRoute)
app.use('/api', articaleRoute)
app.use('/api', listsRoute)


// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Initialization
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => console.log('DB Connection err', err));





const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');
//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

//IMPORT ROUTES FROM ROUTES
const postsRoutes = require('./routes/posts')

app.use('/posts',postsRoutes);

//ROUTE
app.get('/',(req,res) => {
    res.send("Welcome Home");
});

//CONNECT TO DATABASE 
mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true },
    () => {
    console.log("Successfully connected ")
});

//lISTENING ON PORT : 3000
app.listen(3000);

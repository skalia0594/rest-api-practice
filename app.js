const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
//Middleware
app.use(express.json());
app.use(cors());

// import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Route
app.get('/', (req, res) => {
    res.send('We are at home');
});

//connect to db
mongoose.connect(process.env.DB_CONNECTION , { useNewUrlParser: true, useUnifiedTopology: true } , () => 
                    console.log('Connected to DataBase'));


//listen
const port= process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port: ${port}`));
const express = require('express');
const cors    = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


const app = express();

//express JSON.data
app.use(express.json());

// start cors
app.use(cors());

//mongo connection 
mongoose.connect(
     'mongodb+srv://<deploy>:<password>@cluster0.umtu1.mongodb.net/<dbname>?retryWrites=true&w=majority',
     {useNewUrlParser: true,useUnifiedTopology: true}
     );
     requireDir('./src/models/');


     app.use('/api',require('./src/routes'));


app.listen(process.env.PORT || 3001);

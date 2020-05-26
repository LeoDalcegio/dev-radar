'use-strict';

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.DB_CONNECT, 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
() => console.log('Connected to db!'));

app.use(express.json());
app.use('/api', routes);

const PORT = 3333 || process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

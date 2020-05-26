const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},() => console.log('Connected to db!'));

app.use(express.json());
app.use('/api', routes);

const PORT = 3333 || process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

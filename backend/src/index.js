'use-strict';

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebsocket } = require('./websocket');

require('dotenv').config();

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://dbUser-Leo:dbUser-Leo@cluster0-nojmj.mongodb.net/test?retryWrites=true&w=majority', 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
() => console.log('Connected to db!'));

app.use(cors());
app.use(express.json());
app.use('/api', routes);

const PORT = 3333 || process.env.PORT;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

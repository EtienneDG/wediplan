const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
// const count = require('./server/routes/count');
const guest = require('./server/routes/guest');

let app = express();
require('dotenv').load();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);

app.use(bodyParser.json());
// app.use('/api/count', count);
app.use('/api/guest', guest);

app.use(express.static(path.join(__dirname, './dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

const port = 3000;
app.listen(port, () => console.log('Running on localhost:', port));

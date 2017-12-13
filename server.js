const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// routes
const guest = require('./server/routes/guest');
const location = require('./server/routes/location');
const compression = require('compression');

let app = express();
require('dotenv').load();

app.use(compression());

app.use(bodyParser.json());
app.use('/api/guest', guest);
app.use('/api/location', location);

app.use(express.static(path.join(__dirname, './dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

const port = 3000;
app.listen(port, () => console.log('Running on localhost:', port));

mongoose.Promise = global.Promise;
let options = {
  useMongoClient: true
};

if (process.env.MONGO_ENV !== 'dev') {
  options['user'] = process.env.MONGO_USER;
  options['pass'] = process.env.MONGO_PWD;
  options['auth'] = {authdb: 'admin'};
}

mongoose.connect(process.env.MONGO_URI, options)
.then(() => {
  return app;
})
.catch(err => {
  console.error(`App starting error :  
    ${err.stack}`);
  process.exit(1);
});

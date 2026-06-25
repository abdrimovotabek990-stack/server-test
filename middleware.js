const express = require('express');
const requestLogger = require('./middleware'); 

const app = express();

app.use(requestLogger);

app.get('/', (req, res) => {
  res.send('Bosh sahifa');
});

app.listen(3000, () => console.log('Server ishladi '));
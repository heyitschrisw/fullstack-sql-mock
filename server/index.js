// Express Server
// FIX ME :(
  const express = require('express');
  const path = require('path');
  const router = require('./router');
  const controller = require('./controller');
  const morgan = require('morgan');
  const cors = require('cors');

  const server = express();
  const port = 3000;

  server.use('/', express.static(path.join(__dirname + '/../client/dist')));
  server.use(express.json());
  server.use(morgan('dev'));
  server.use(cors());

  server.use('/', router);

  server.listen(port, () => console.log('Connected to port: 3000'))
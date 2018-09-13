const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
mongoose.plugin(require('./lib/globalToJSON'));
mongoose.Promise = require('bluebird');
const { port, env, dbURI } = require('./config/environment');
const routes = require('./config/routes');
const customResponses = require('./lib/customResponses');
const errorHandler = require('./lib/errorHandler');

const app = express();



mongoose.connect(dbURI);

if(env !== 'test') app.use(morgan('dev'));


app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/mean')));

app.use(bodyParser.json());
app.use(customResponses);
app.use('/api', routes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/mean'));
});

// Routes to prevent 404 error after page refresh
// app.get('*', function (req, res) {
//   res.sendFile(path.resolve('dist/mean/index.html'));
// });

app.use(errorHandler);






app.listen(port, () => console.log(`Express has started on port: ${port}`));

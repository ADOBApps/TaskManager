const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port', process.env.PORT || 4000);


//middlewares //Function before routes
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/tasks', require('./routes/tasks'));

module.exports = app;
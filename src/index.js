const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

//db connection
const {mongoose} = require('./database.js')

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/tasks', require('./routes/tasks.routes.js'));

//staticfiles
app.use(express.static(path.join(__dirname, 'public')));

//starting the server
app.listen(3000, () => {
    console.log(`Server is running on port ${app.get('port')}`);
});
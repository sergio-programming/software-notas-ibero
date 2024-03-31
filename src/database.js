const mongoose = require('mongoose');
const URL = 'mongodb+srv://root:admin@cluster0.lg7iaco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(URL)
    .then(db => console.log('DB is Connected'))
    .catch(error => console.error(error));

module.exports = mongoose;    
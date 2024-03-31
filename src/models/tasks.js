const mongoose = require('mongoose');
const {Schema} = mongoose;

const tasksSchema = new Schema({
    nombre: {type: String, required: true},
    materia: {type: String, required: true},
    nota1: {type: Number, required: true},
    nota2: {type: Number, required: true},
    nota3: {type: Number, required: true},
    promedio: {type: Number, required: true},
    
});

module.exports = mongoose.model('Task', tasksSchema);
const express = require('express');
const router = express.Router();

//Task Model
const Task = require('../models/tasks');

//Ruta GET 
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener tareas' });
    }
});

//RUTA POST
router.post('/', async (req, res) => {
    const { nombre, materia, nota1, nota2, nota3 } = req.body;
    const promedio = (nota1 + nota2 + nota3) / 3;
    try {
        const task = new Task({ nombre, materia, nota1, nota2, nota3, promedio });
        await task.save();
        res.json({ status: 'Tarea Guardada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar la tarea' });
    }
});

//RUTA PUT
router.put('/:id', async (req, res) => {
    const { nombre, materia, nota1, nota2, nota3 } = req.body;
    const newTask = ({ nombre, materia, nota1, nota2, nota3 });
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({ status: 'Tarea actualizada' });
});

//RUTA DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ error: 'La tarea no se encontró' });
        }
        res.json({ status: 'Tarea eliminada', deletedTask });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
});


module.exports = router;
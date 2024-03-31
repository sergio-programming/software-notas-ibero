import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            nombre: '',
            materia: '',
            nota1: '',
            nota2: '',
            nota3: '',
            tasks: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    addTask(e) {
        e.preventDefault();
        const { nombre, materia, nota1, nota2, nota3 } = this.state;
        // Calcula el promedio de las notas
        const promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
        const newTask = {
            nombre,
            materia,
            nota1,
            nota2,
            nota3,
            promedio: promedio.toFixed(2) // Redondea el promedio a 2 decimales
        };
        this.setState({
            tasks: [...this.state.tasks, newTask],
            nombre: '',
            materia: '',
            nota1: '',
            nota2: '',
            nota3: ''
        });
    }

    deleteTask(id) {
        const updatedTasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({ tasks: updatedTasks });
    }
    

    render() {
        const inputStyle = {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
            marginBottom: '20px'
        };

        const buttonStyle = {
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        };

        const headerStyle = {
            backgroundColor: '#f2f2f2',
            color: '#333',
            textAlign: 'center',
            padding: '20px 0',
            marginBottom: '20px',
            borderBottom: '2px solid #333', 
        };

        return (
            <div>
                <header style={headerStyle} >
                    <h1>Software de Notas</h1>
                </header>
                <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <form id="taskForm" onSubmit={this.addTask}>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="nombre">Nombre:</label>
                            <input style={inputStyle} type="text" id="nombre" name="nombre" value={this.state.nombre} onChange={this.handleChange} required />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="materia">Materia:</label>
                            <input style={inputStyle} type="text" id="materia" name="materia" value={this.state.materia} onChange={this.handleChange} required />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="nota1">Nota 1:</label>
                            <input style={inputStyle} type="number" id="nota1" name="nota1" min="0" max="5" step="0.1" value={this.state.nota1} onChange={this.handleChange} required />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="nota2">Nota 2:</label>
                            <input style={inputStyle} type="number" id="nota2" name="nota2" min="0" max="5" step="0.1" value={this.state.nota2} onChange={this.handleChange} required />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="nota3">Nota 3:</label>
                            <input style={inputStyle} type="number" id="nota3" name="nota3" min="0" max="5" step="0.1" value={this.state.nota3} onChange={this.handleChange} required />
                        </div>
                        <input style={buttonStyle} type="submit" value="Guardar" />
                    </form>
                    <div>
                        <h2>Notas de estudiantes</h2>
                        {this.state.tasks.map((task, index) => (
                            <div key={index}>
                                <h3>{task.nombre}</h3>
                                <p>Materia: {task.materia}</p>
                                <p>Nota 1: {task.nota1}</p>
                                <p>Nota 2: {task.nota2}</p>
                                <p>Nota 3: {task.nota3}</p>
                                <p>Promedio: {task.promedio}</p>
                                <button style={{ ...buttonStyle, backgroundColor: 'red' }} onClick={() => this.deleteTask(task.id)}>Eliminar</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let tasks = [
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
];

app.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        name: req.body.name,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== taskId);
    res.status(204).send();
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Сервер REST API запущено на http://localhost:${PORT}`);
});

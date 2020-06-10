import express from 'express';
import { promises } from 'fs';

const app = express();
const port = 3000;
const { readFile, writeFile, appendFile } = promises;

app.use(express.json());

// Listen
app.listen(port, () => {
    console.log(`API running on port ${port}...`);
});

// Create Grade
app.post('/', async (req, res) => {
    let { student, subject, type, value } = req.body;
    let timestamp = new Date();
    let gradesData = JSON.parse(await readFile('./grades.json', 'utf8'));
    let id = gradesData.nextId;

    let preData = {
        id,
        student,
        subject,
        type,
        value,
        timestamp,
    };

    gradesData.grades.push(preData);
    gradesData.nextId++;
    await writeFile('./grades.json', JSON.stringify(gradesData), 'utf8');
    res.send(gradesData);
});

app.put('/:id', async (req, res) => {
    let id = parseInt(req.params.id);
    let { student, subject, type, value } = req.body;
    let gradesData = JSON.parse(await readFile('./grades.json', 'utf8'));

    let gradeToUpdate = gradesData.grades.find((grade) => grade.id === id);
    if (gradeToUpdate === undefined) {
        res.status(404).json({ error: 'id não encontrado' });
    }
    gradeToUpdate.student = student;
    gradeToUpdate.subject = subject;
    gradeToUpdate.type = type;
    gradeToUpdate.value = value;

    await writeFile('./grades.json', JSON.stringify(gradesData), 'utf8');
    res.send(gradeToUpdate);
});

app.delete('/:id', async (req, res) => {
    let id = parseInt(req.params.id);
    let gradesData = JSON.parse(await readFile('./grades.json', 'utf8'));

    let gradeToDelete = gradesData.grades.findIndex((grade) => grade.id === id);
    if (gradeToDelete === -1) {
        res.status(404).json({ error: 'id não encontrado' });
    }

    gradesData.grades.splice(gradeToDelete, 1);

    await writeFile('./grades.json', JSON.stringify(gradesData), 'utf8');
    res.send(gradesData);
});

app.get('/:id', async (req, res) => {
    let id = parseInt(req.params.id);
    let gradesData = JSON.parse(await readFile('./grades.json', 'utf8'));

    let gradeToShow = gradesData.grades.find((grade) => grade.id === id);
    if (gradeToShow === undefined) {
        res.status(404).json({ error: 'id não encontrado' });
    }
    res.send(gradeToShow);
});

app.get('/sum/:student/:subject', async (req, res) => {
    let { student, subject } = req.params;
    let gradesData = JSON.parse(await readFile('./grades.json', 'utf8'));
    let studentGrades = gradesData.grades.filter((grade) => {
        if (student === grade.student && subject === grade.subject) {
            return true;
        }
    });

    let gradesSum = studentGrades.reduce((acc, grade) => {
        return acc + grade.value;
    }, 0);

    res.status(200).json(gradesSum);
});

app.get('/avg/:type/:subject', async (req, res) => {
    let { type, subject } = req.params;
    let gradesData = JSON.parse(await readFile('./grades.json', 'utf8'));
    let typeGrades = gradesData.grades.filter((grade) => {
        if (type === grade.type && subject === grade.subject) {
            return true;
        }
    });

    let gradesAvg =
        typeGrades.reduce((acc, grade) => {
            return acc + grade.value;
        }, 0) / typeGrades.length;

    res.status(200).json(gradesAvg);
});

app.get('/top/:type/:subject', async (req, res) => {
    let { type, subject } = req.params;
    let gradesData = JSON.parse(await readFile('./grades.json', 'utf8'));
    let topGrades = gradesData.grades
        .filter((grade) => {
            if (type === grade.type && subject === grade.subject) {
                return true;
            }
        })
        .sort((a, b) => {
            return b.value - a.value;
        })
        .splice(0, 3);

    res.status(200).json(topGrades);
});

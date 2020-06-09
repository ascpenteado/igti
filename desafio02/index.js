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

/*  TO DO ***

5. Crie um endpoint para consultar a nota total de um aluno em uma disciplina. O endpoint deverá receber como parâmetro o student e o subject, e realizar a soma de todas as notas de atividades correspondentes àquele subject, para aquele student. O endpoint deverá retornar a soma da propriedade value dos registros encontrados.
6. Crie um endpoint para consultar a média das grades de determinado subject e type. O endpoint deverá receber como parâmetro um subject e um type, e retornar a média. A média é calculada somando o registro value de todos os registros que possuem o subject e type informados, dividindo pelo total de registros que possuem este mesmo subject e type.
7. Crie um endpoint para retornar as três melhores grades de acordo com determinado subject e type. O endpoint deve receber como parâmetro um subject e um type, e retornar um array com os três registros de maior value daquele subject e type. A ordem deve ser do maior para o menor. 
*/

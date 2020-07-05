import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send(req.body);
});

app.listen(port, () => {
    console.log('Server listen on port ' + port);
});

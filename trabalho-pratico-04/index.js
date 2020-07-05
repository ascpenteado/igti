import express from 'express';
import mongoose from 'mongoose';
import { promises } from 'fs';
const { writeFile, readFile } = promises;

//Import Routes
import { depositRouter } from './routes/deposit.js';
import { AccountModel } from './models/AccountModel.js';

const app = express();
const port = 3000;
app.use(express.json());

//Define Routes
app.use(depositRouter);

mongoose
    .connect(
        'mongodb+srv://ascpenteado:trabalhoPratico04@trabalho-pratico-04.ztdnx.gcp.mongodb.net/my-bank-api?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then((result) => {
        app.listen(port, () => {
            console.log('Server listen on port ' + port);
            (async () => {
                try {
                    const accounts = await AccountModel.find({});
                    if (accounts.length === 0) {
                        const newAccounts = JSON.parse(
                            await readFile('./accounts.json', 'utf8')
                        );
                        for (let i = 0; i < newAccounts.length; i++) {
                            let newAccount = new AccountModel(newAccounts[i]);
                            await newAccount.save();
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
        });
    })
    .catch((error) => {
        console.log('Erro ao conectar com o banco de dados' + error);
    });

import express from 'express';
import mongoose from 'mongoose';
import { promises } from 'fs';
import { AccountModel } from './models/AccountModel.js';
const { writeFile, readFile } = promises;

//Import Routes
import { depositRouter } from './routes/deposit.js';
import { withdrawRouter } from './routes/withdraw.js';
import { balanceRouter } from './routes/balance.js';
import { deleteAccountRouter } from './routes/deleteAccount.js';
import { transferRouter } from './routes/transfer.js';
import { averageRouter } from './routes/average.js';
import { lowBalanceRouter } from './routes/lowbalance.js';
import { highBalanceRouter } from './routes/highbalance.js';
import { privateRouter } from './routes/private.js';

const app = express();
const port = 3000;
app.use(express.json());

//Define Routes
app.use(depositRouter);
app.use(withdrawRouter);
app.use(balanceRouter);
app.use(deleteAccountRouter);
app.use(transferRouter);
app.use(averageRouter);
app.use(lowBalanceRouter);
app.use(highBalanceRouter);
app.use(privateRouter);

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

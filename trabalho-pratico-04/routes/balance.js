import express from 'express';
import { AccountModel } from '../models/AccountModel.js';
const balanceRouter = express.Router();

balanceRouter.route('/balance').post(async (req, res) => {
    let { agencia, conta } = req.body;
    try {
        const account = await AccountModel.findOne({ agencia, conta });
        if (account) {
            let balance = account.balance;
            res.send({ balance: balance });
        } else {
            res.sendStatus(500);
        }
    } catch (error) {
        res.send(error);
    }
});

export { balanceRouter };

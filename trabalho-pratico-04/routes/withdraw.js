import express from 'express';
import { AccountModel } from '../models/AccountModel.js';
const withdrawRouter = express.Router();

withdrawRouter.route('/withdraw').post(async (req, res) => {
    let { agencia, conta, withdraw } = req.body;
    try {
        const account = await AccountModel.findOne({ agencia, conta });
        if (account) {
            let balance = account.balance;
            let tax = 1;
            let newBalance = balance - (withdraw + tax);
            if (newBalance < 0) {
                res.send('Não há saldo suficiente.');
            } else {
                const accountUpdated = await AccountModel.findOneAndUpdate(
                    { _id: account._id },
                    { balance: newBalance },
                    { new: true }
                );

                res.send(accountUpdated);
            }
        } else {
            res.status(500).send('Conta não encontrada');
        }
    } catch (error) {
        res.send(error);
    }
});

export { withdrawRouter };

import express from 'express';
import { AccountModel } from '../models/AccountModel.js';
const depositRouter = express.Router();

depositRouter.route('/deposit').post(async (req, res) => {
    let { agencia, conta, deposit } = req.body;
    try {
        const updatedAccount = await AccountModel.findOneAndUpdate(
            { agencia, conta },
            { $inc: { balance: deposit } },
            { new: true }
        );
        if (updatedAccount) {
            res.send(updatedAccount);
        } else {
            res.status(500).send('Conta não encontrada');
        }
    } catch (error) {
        res.send(error);
    }
});

export { depositRouter };

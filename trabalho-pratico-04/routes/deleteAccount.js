import express from 'express';
import { AccountModel } from '../models/AccountModel.js';
const deleteAccountRouter = express.Router();

deleteAccountRouter.route('/delete').delete(async (req, res) => {
    let { agencia, conta } = req.body;
    try {
        const account = await AccountModel.findOneAndDelete({ agencia, conta });
        if (account) {
            const totalContasAgencia = await AccountModel.count({
                agencia,
            });
            res.send({ totalContas: totalContasAgencia });
        } else {
            res.status(500).send('Conta não encontrada');
        }
    } catch (error) {
        res.send(error);
    }
});

export { deleteAccountRouter };

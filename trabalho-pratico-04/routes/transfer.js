import express from 'express';
import { AccountModel } from '../models/AccountModel.js';
const transferRouter = express.Router();

transferRouter.route('/transfer').post(async (req, res) => {
    let {
        agenciaOrigem,
        agenciaDestino,
        contaOrigem,
        contaDestino,
        amount,
    } = req.body;
    try {
        const sender = await AccountModel.findOne({
            agencia: agenciaOrigem,
            conta: contaOrigem,
        });
        const receiver = await AccountModel.findOne({
            agencia: agenciaDestino,
            conta: contaDestino,
        });

        // Validar se a conta de origem existe
        if (!sender) {
            res.send('Agência e/ou Conta de origem não encontradas');
        }

        // Validar se a conta de destino existe
        if (!receiver) {
            res.send('Agência e/ou Conta de destino não encontradas');
        }

        // Definição de variáveis para realizar a transf.
        let senderBalance = sender.balance;
        let receiverBalance = receiver.balance;
        let tax = 0;
        //Validar se as contas são da mesma agência
        if (agenciaOrigem !== agenciaDestino) {
            // Definir taxa extra quando a conta não é da mesma agência
            tax = 8;
        }
        let senderNewBalance = senderBalance - (amount + tax);
        let receiverNewBalance = receiverBalance + amount;

        // Validar se temos saldo para a transferẽncia
        if (senderNewBalance < 0) {
            res.send('Não há saldo suficiente para realizar a transferência.');
        } else {
            const senderUpdated = await AccountModel.findOneAndUpdate(
                { _id: sender._id },
                { balance: senderNewBalance },
                { new: true }
            );

            const receiverUpdated = await AccountModel.findOneAndUpdate(
                { _id: receiver._id },
                { balance: receiverNewBalance },
                { new: true }
            );

            res.send({
                contaOrigemBalance: senderUpdated.balance,
                contaDestinoBalance: receiverUpdated.balance,
            });
        }
    } catch (error) {
        res.send(error);
    }
});

export { transferRouter };

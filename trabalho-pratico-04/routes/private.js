import express from 'express';
import { AccountModel } from '../models/AccountModel.js';
const privateRouter = express.Router();

privateRouter.route('/private').get(async (req, res) => {
    try {
        // encontrar os ids de todas as agencias
        let agencias = await AccountModel.distinct('agencia');

        let richest = [];

        // fazer uma busca com cada id retornando o mais rico
        for (let i = 0; i < agencias.length; i++) {
            let rich = await AccountModel.find({ agencia: agencias[i] })
                .limit(1)
                .sort({ balance: -1, name: 1 });
            richest.push(rich[0]);
        }

        richest.forEach((rich) => {
            rich.agencia = 99;
        });

        // retornar lista de clientes da agencia private
        res.send({ richest });
    } catch (error) {
        res.send(error);
    }
});

export { privateRouter };

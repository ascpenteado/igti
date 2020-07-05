import express from 'express';
import { AccountModel } from '../models/AccountModel.js';
const averageRouter = express.Router();

averageRouter.route('/average').post(async (req, res) => {
    let { agencia } = req.body;
    try {
        const average = await AccountModel.aggregate([
            { $match: { agencia: agencia } },
            { $group: { _id: null, avg: { $avg: '$balance' } } },
        ]);

        res.send({ average: average[0].avg });
    } catch (error) {
        res.send(error);
    }
});

export { averageRouter };

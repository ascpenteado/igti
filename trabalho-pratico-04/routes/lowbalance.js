import express from 'express';
import { AccountModel } from '../models/AccountModel.js';
const lowBalanceRouter = express.Router();

lowBalanceRouter.route('/lowbalance/:limit').get(async (req, res) => {
    let limit = parseInt(req.params.limit);
    try {
        const lower = await AccountModel.find({}, { _id: 0, name: 0, __v: 0 })
            .limit(limit)
            .sort({ balance: 1 });

        res.send(lower);
    } catch (error) {
        res.send(error);
    }
});

export { lowBalanceRouter };

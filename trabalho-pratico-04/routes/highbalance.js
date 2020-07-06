import express from 'express';
import { AccountModel } from '../models/AccountModel.js';
const highBalanceRouter = express.Router();

highBalanceRouter.route('/highbalance/:limit').get(async (req, res) => {
    let limit = parseInt(req.params.limit);
    try {
        const highest = await AccountModel.find({}, { _id: 0, __v: 0 })
            .limit(limit)
            .sort({ balance: -1, name: 1 });

        res.send(highest);
    } catch (error) {
        res.send(error);
    }
});

export { highBalanceRouter };

import mongoose from 'mongoose';

const accountSchema = mongoose.Schema({
    agencia: {
        type: Number,
        required: true,
    },
    conta: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    },
});

const AccountModel = mongoose.model('Account', accountSchema);

export { AccountModel };

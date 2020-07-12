import mongoose from 'mongoose';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

const gradeSchema = mongoose.Schema({
    name: { type: String, required: true },
    subject: { type: String, required: true },
    type: { type: String, required: true },
    value: { type: Number, required: true },
    lastModified: { type: Date, required: false },
});

const GradeModel = mongoose.model('Grade', gradeSchema);

export { db, GradeModel };

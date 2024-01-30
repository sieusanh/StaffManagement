import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const AccountSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minLength: 6
        },
        avatar: {
            type: String
        },
        role: {
            type: String,
            default: 'USER'
        }
    },
    { timestamps: true }
);

AccountSchema.pre('save', function (next) {
    next();
});

AccountSchema.post('save', function (doc, next) {
    next();
});

export default mongoose.model("Account", AccountSchema);

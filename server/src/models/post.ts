import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        default: 'Anonymous'
    },
    attachment: String,
    likeCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

export default mongoose.model("Post", PostSchema);

import mongoose from 'mongoose';

const postFormat = mongoose.Schema({
    name: String,
    type: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostRecipe = mongoose.model('PostMessage', postSchema);

export default PostRecipe;
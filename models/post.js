import mongoose from "mongoose";

const postSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    describe: {

        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now

    },
})
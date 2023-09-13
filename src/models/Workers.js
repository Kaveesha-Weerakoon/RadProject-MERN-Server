import mongoose from "mongoose";

const WorkerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    nic: {
        type: String,
        required: true,
        minlength: 12,
        maxlength: 255,
    },
    address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    contactno: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 255
    }

});

export const WorkerModel = mongoose.model("Workers", WorkerSchema);
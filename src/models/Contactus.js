import mongoose from "mongoose";

const ContactusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
    },
    contactno: {
        type: Number,
        required: true,
        minlength: 4,
        maxlength: 10
    },
    problem: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 500
    }
});

export const ContactusModel = mongoose.model("ContactUs", ContactusSchema);
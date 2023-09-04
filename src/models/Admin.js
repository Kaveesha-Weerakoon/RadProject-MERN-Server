import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    }
});

export const AdminModel = mongoose.model("Admin", AdminSchema);
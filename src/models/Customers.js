import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    dateofbirth: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    contactno: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 15,
    },
    password: {
        type: String,
        required: true,
    }
})

export const CustomerModel = mongoose.model("Customers", CustomerSchema);
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { customerRouter } from './routes/Customer.js'
import { adminRouter } from "./routes/Admin.js";
import { workerRouter } from "./routes/Workers.js";
import { contactUsRouter } from "./routes/Contactus.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/Customer", customerRouter);
app.use("/Admin", adminRouter);
app.use("/Workers", workerRouter);
app.use("/Contactus", contactUsRouter)

mongoose.connect('mongodb://localhost/Gear').
    then(() => console.log('Connected to MongoDB ...'))
    .catch(err => console.log('Could not connect to MongoDB ...'));

app.listen(3001, () => {
    console.log("Server started");
})

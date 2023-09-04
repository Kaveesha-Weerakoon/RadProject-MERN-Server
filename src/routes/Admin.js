import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import { AdminModel } from "../models/Admin.js";

const router = express.Router();

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const admin = await AdminModel.findOne({ username });

    if (!admin) {
        return res.status(400).send('Invalid username');
    }
    const isPassword = await bcrypt.compare(password, admin.password);
    if (!isPassword) {
        return res.status(400).send('Invalid password');
    }

    const token = jwt.sign({ id: admin._id }, "secret1");
    res.json({ token, userID: admin._id })
});


router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const customer = await AdminModel.findOne({ username });

    if (customer) {
        return res.status(400).send('user already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newCustomer = new AdminModel({ username, password: hashedPassword });
    await newCustomer.save();
    res.json({ message: "User registerd Successfully" });
});
export { router as adminRouter };
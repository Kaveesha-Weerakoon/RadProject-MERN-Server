import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import { CustomerModel } from "../models/Customers.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, email, dateofbirth, contactno, password } = req.body;
    const customer = await CustomerModel.findOne({ email });

    if (customer) {
        return res.status(400).send('user already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newCustomer = new CustomerModel({ username, email, dateofbirth, contactno, password: hashedPassword });
    await newCustomer.save();
    res.json({ message: "User registerd Successfully" });
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const customer = await CustomerModel.findOne({ email });

    if (!customer) {
        return res.status(400).send('Invalid username');
    }
    const isPassword = await bcrypt.compare(password, customer.password);
    if (!isPassword) {
        return res.status(400).send('Invalid password');
    }

    const token = jwt.sign({ id: customer._id }, "secret");
    res.json({ token, userID: customer._id })
});

router.get('/customer/:id', async (req, res) => {
    const customer = await CustomerModel.findById(req.params.id);

    if (!customer) {
        return res.send("Not Found");
    }
    res.send(customer);
})

export { router as customerRouter };
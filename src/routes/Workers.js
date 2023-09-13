import express from "express";
import { WorkerModel } from "../models/Workers.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    const { name, nic, contactno, address } = req.body;
    const worker = await WorkerModel.findOne({ nic });

    if (worker) {
        return res.status(400).send('user already exists');
    }

    const newWoker = new WorkerModel({ name, nic, address, contactno });

    await newWoker.save();
    res.json({ message: "User registerd Successfully" });
});


router.get('/worker/', async (req, res) => {
    const worker = await WorkerModel.find();

    if (!worker) {
        return res.send("Not Found");
    }
    res.send(worker);
})

router.put('/worker/:id', async (req, res) => {
    try {

        const worker = await WorkerModel.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            nic: req.body.nic,
            contactno: req.body.contactno,
            address: req.body.address

        }, { new: true });

        if (!worker) {
            return res.send("Not Found");

        }
        res.send(worker);
    }
    catch {
        res.send('error')
    }



});

router.delete('/worker/:id', async (req, res) => {

    const worker = await WorkerModel.findByIdAndRemove(req.params.id);
    if (!worker) {
        return res.send("Not Found");
    }
    res.send(worker);
})


export { router as workerRouter };

import express from "express";
import { WorkerModel } from "../models/Workers.js";
import { ContactusModel } from "../models/Contactus.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { name, contactno, problem } = req.body;
        const newcontactus = new ContactusModel({ name, contactno, problem });
        await newcontactus.save();
        res.json({ message: "Submitted Successfully" });
    }
    catch (e) {
        res.send(e);
    }

});

router.get('/contactus/', async (req, res) => {
    const contactus = await ContactusModel.find();

    if (!contactus) {
        return res.send("Not Found");
    }
    res.send(contactus);
})

router.delete('/contactus/:id', async (req, res) => {

    const contactus = await ContactusModel.findByIdAndRemove(req.params.id);
    if (!contactus) {
        return res.send("Not Found");
    }
    res.send(contactus);
})

export { router as contactUsRouter };
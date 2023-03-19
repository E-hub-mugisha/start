const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server running"));

const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
        user: "kabosierik@gmail.com",
        pass: "HirwaFabrice@170",
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to send");
    }
});

router.post("/contact", (req, res) => {
    const names = req.body.names;
    const email = req.body.email;
    const phone = req.body.phone;
    const subject = req.body.subject;
    const message = req.body.message;
    const mail = {
        from: names,
        to: "kabosierik@gmail.com",
        subject: subject,
        html: `<p>name: ${names}</p>
               <p>name: ${phone}</p>
               <p>name: ${email}</p>
               <p>name: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if(error){
            res.json({ status: "ERROR"});
        } else {
            res.json({ status: "message sent"});
        }
    });

});
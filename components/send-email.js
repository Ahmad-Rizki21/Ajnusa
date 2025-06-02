const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ahmad@ajnusa.com',
        pass: 'Logintoahmad123!'
    }
});

app.post('/send-email', (req, res) => {
    const { to, from, subject, text } = req.body;

    const mailOptions = {
        from,
        to,
        subject,
        text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json({ message: 'Email sent', info });
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
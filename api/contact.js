const express = require('express')
const mailer = require('nodemailer')

const handler = express()
handler.use(express.json())

handler.post('/send/email', (req, res) => {
   const transporter = mailer.createTransport({
        host: 'philippec.me',
        port: 465,
        auth: {
            user: 'help@philippec.me',
            pass: 'C^6PXOkr8[1K'
        }  
    })
    console.log(req)
    transporter.sendMail({
        from: `"${req.body.name}" <help@philippec.me>`,
        to: 'hello@philippec.me',
        subject: 'New Message On Site',
        text: `sender: ${req.body.name}\n
        email: ${req.body.email}\n
        ${req.body.message}`,
        html: `<div><h5>Sender: ${req.body.name}</h5></div>
        <div><small>Email: ${req.body.email}</small></div>
        <p>${req.body.message}<p>`
    })
    .catch((err) => {
        res.status(500).json(err);
    })
    .then((response) => {
        res.status(200).json(response);
    })
})
module.exports = {
    path: true,
    handler
}

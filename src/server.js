
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use("/", router);


// Create the transporter with the required configuration for Outlook
// change the user and pass !
var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
  
transporter.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
});

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var subject = req.body.subject
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `
    var mail = {
      from: name,
      to: process.env.EMAIL, // receiver email,
      subject: subject,
      text: content
    }
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })




const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));


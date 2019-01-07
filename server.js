var express = require('express');
var path = require('path');
var app = express();
const PORT=process.env.PORT||3000;
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
require('dotenv').config();


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json())

var server = app.listen(PORT, function() {
  console.log('Magic happens on port ' + PORT);
});

var smtpTransport = nodemailer.createTransport({
    service: "Office365",
    host: "smtp.office365.com",  
    secureConnection: false,
    port: 25,
    auth: {
    user: process.env.email,
    pass: process.env.password
    },
    tls:{
        rejectUnauthorized: false
    }
});

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
})

app.post('/send-email', function(req, res) {
    var mailOptions = {
        from: "'Josh' <josh.mccormick@gmass.net>", // sender address
        to: "josh.mccormick@gmass.net", // list of receivers
        cc:"stan@gmass.net",
        subject: req.body.type, // Subject line
        text: `From: ${req.body.name} who is affiliated with ${req.body.corporation} has sent a message through our online contact form. It states: ${req.body.message}` // plaintext body

    };
        smtpTransport.sendMail(mailOptions, function(error, info) {
         if (error) {
             return console.log(error);
         }
         console.log('Message sent: ' + info.response);
     });

     res.redirect(path.join(__dirname, '/public', 'index.html'));
 });
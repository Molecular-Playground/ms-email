var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var GMAIL_USERNAME = process.env.GMAIL_USERNAME;
var GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: GMAIL_USERNAME + "@gmail.com",
        pass: GMAIL_PASSWORD
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: "Molecular Playground <" + GMAIL_USERNAME + "@gmail.com", // sender address
    to: GMAIL_USERNAME + "@gmail.com", // list of receivers
    subject: 'Message From Molecular Playground', // Subject line
    text: "This is an autogenerated email from Molecular Playground that has been sent in error. Please disregard.", // plaintext body
    html: "<p>This is an autogenerated email from Molecular Playground that has been sent in error. Please disregard.</p>" // html body
};

// PUT: send the email!
router.put('/validate', function(req, res, next) {
  mailOptions.text = "Hi there!\nWe're so glad you've joined.  Follow the link below to verify your account.\nThanks!\nThe Molecular Playground Team";
  mailOptions.html = "<p>Hi there!</p><p>We\'re so glad you've joined. Follow the link below to verify your account.</p><p>Thanks!</p><p>The Molecular Playground Team</p>";
  mailOptions.subject = 'Welcome to Molecular Playground!';
  if(!req.body.email ||  !req.body.link) {
    next(new Error("Please provide necessary parameters. Email address and full validation url required."));
    return;
  }
  mailOptions.to = req.body.email;
  mailOptions.text += "\n Your link: " + req.body.link;
  mailOptions.html += "<p> Your link: " + req.body.link + "</p>";

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function (error, info) {
    if(error){ next(error);return;}
    res.send('Message sent!');
  });
});

router.put('/general', function(req, res, next) {
  if (!req.body.email || !req.body.subject || !req.body.text || !req.body.html) {
    next(new Error("Please provide necessary parameters. Email address, subject, html, and plaintext all required."));
    return;
  }
  mailOptions.to = req.body.email;
  mailOptions.subject = req.body.subject;
  mailOptions.text = req.body.text;
  mailOptions.html = req.body.html;

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function (error, info) {
    if(error){ next(error);return;}
    res.send('Message sent!');
  });
});

module.exports = router;

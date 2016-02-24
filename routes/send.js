var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'molecularplayground@gmail.com',
        pass: 'ihearttim497'
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Molecular Playground <molecularplayground@gmail.com>', // sender address
    to: 'rwstanle@umass.edu', // list of receivers
    subject: 'Welcome to Molecular Playground!', // Subject line
    text: "Hi there!\nWe're so glad you've joined.  Follow the link below to verify your account.\nThanks!\nThe Molecular Playground Team", // plaintext body
    html: "<p>Hi there!</p><p>We so glad you've joined. Follow the link below to verify your account.</p><p>Thanks!</p><p>The Molecular Playground Team</p>" // html body
};


// PUT: send the email!
router.put('/', function(req, res, next) {
  if (req.body.email) {
    mailOptions.to = req.body.email;
  }
  if (req.body.link) {
    mailOptions.text += "\n Your link: " + req.body.link;
    mailOptions.html += "<p> Your link: " + req.body.link + "</p>";
  }
  console.log(req.body);
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } 
    else {
      console.log('Message sent: ' + info.response);
    }
  });
});

module.exports = router;
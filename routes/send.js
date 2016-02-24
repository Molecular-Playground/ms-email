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
    from: 'Molecular Playground ✔ <molecularplayground@gmail.com>', // sender address
    to: 'akaplowitz@umass.edu', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};


// GET users listing
router.get('/', function(req, res, next) {
 // mailOptions.to = req.body.email;
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
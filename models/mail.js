"use strict";
const nodemailer = require("nodemailer");

require('dotenv').config();

  
  
let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: process.env.GMAIL_ID, 
        pass: process.env.GMAIL_PWD
    } 
}); 
module.exports = {
mailing: function(props, msg){  
let mailDetails = { 
    from: 'sohamshah.ict18@gmail.com', 
    to: props, 
    subject: 'Test mail', 
    text: msg,
}; 
 
mailTransporter.sendMail(mailDetails, function(err, data) { 
    if(err) { 
        console.log('Error Occurs'); 
    } else { 
        console.log('Email sent successfully'); 
    } 
}); 
}
}




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
mailing: function(receipent, msg){  
let mailDetails = { 
    from: 'sohamshah.ict18@gmail.com', 
    to: receipent, 
    subject: 'IMPORTANT - Verification Link for Web 51 !', 
    
    html: "Click on the Link below to verify your account. <br/><span>" + msg + "</span></a>", // html body
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




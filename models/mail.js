//Nodemailer.js EMAIL Sending Service

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
    from: 'sender-account-email-here', 
    to: receipent, 
    subject: 'IMPORTANT - Verification Link for Web 51 !', 
    
    html: "Copy the Link below in your browser to verify your account. <br/> <span>" + msg + "</span>", // html body
}; 
 
mailTransporter.sendMail(mailDetails, function(err, data) { 
    if(err) { 
        console.log('Error Occured'); 
    } else { 
        console.log('Email sent successfully'); 
    } 
}); 
}
}




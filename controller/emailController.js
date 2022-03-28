const nodemailer = require('nodemailer');
require('dotenv').config();
//import {transporter} from '../config/mailer'

exports.sendEmail = async(req,res) => {

    const {from,to,subject,text,html} = req.body
    try{
     const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.USER , // generated ethereal user
          pass: process.env.PASSWORD // generated ethereal password
        },
      });
    
      transporter.verify().then(() => {
          console.log("Ready for send emails")
        })

  let info = await transporter.sendMail({
    from: `${from} <donotreply@bar.com>`, // sender address
    to, // list of receivers
    subject, // Subject line
    html, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  res.send({msg: "Email enviado"});
}
  catch(err){
      res.status(400).send({msg: "Error en el envio"});
  }
}
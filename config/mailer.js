const nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "moimore2000@gmail.com", // generated ethereal user
      pass: "kchdylwtoqhplmao", // generated ethereal password
    },
  });

  transporter.verify().then(() => {
      console.log("Ready for send emails")
    })
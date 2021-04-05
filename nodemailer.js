const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  // true for 465, false for other ports
  auth: {
    user: 'waytofall86@gmail.com', // generated ethereal user
    pass: '********', // generated ethereal password
  },
})

const mailer = (mailOptions) => {
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return console.log(err)
    console.log('Email sent: ', info)
  })
}
module.exports = mailer

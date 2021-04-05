const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./nodemailer')

const app = express()

const PORT = 3000
let user = undefined

app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/img', express.static(__dirname + '/img'))
app.use('/icons', express.static(__dirname + '/icons'))
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/index', (req, res) => {
  if (!req.body.email || !req.body.name) return res.sendStatus(400)
  const mailOptions = {
    from: `<${req.body.email}>`,
    to: 'waytofall86@gmail.com',
    subject: req.body.email,
    text: `${req.body.name}:   ${req.body.message}`,
    //html: '<b>Hello world</b>',
  }
  mailer(mailOptions)
  user = req.body
  console.log(user)
  res.redirect('/index')
})
app.get('/index', (req, res) => {
  if (typeof user !== 'object') return res.sendFile(__dirname + '/index.html')

  res.send(`Спасибо ${user.name}. Твое сообщение отправленно`)
  user = undefined
})
app.listen(PORT, () =>
  console.log(`server listening at http://127.0.0.1:${PORT}/index`)
)

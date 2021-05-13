const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const msg = {
  to: 'dhruvildave22@gmail.com', // Change to your recipient
  from: 'dhruvildave22@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })


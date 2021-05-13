const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'dhruvildave22@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'dhruvildave22@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}



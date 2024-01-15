const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.EMAILFROM,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
         to: email,
        from: process.env.EMAILFROM,
        subject: 'Thanks for your time with us!',
        text: `Goodbye ${name}. We would like to know the reason you are canceling our service!.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fs.pessina@gmail.com',
        subject: 'Welcome to the app',
        text: `Hello ${name}, congrats your have subscribed for the best task app`,
    });
};

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fs.pessina@gmail.com',
        subject: 'Bye Bye',
        text: `Thanks men ${name}`,
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail,
};

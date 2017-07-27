const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const handlebars = require('express-handlebars');

const smtpConfig = {
  host: 'smtp.zoho.eu',
  port: 465,
  secure: true,
  dkim: {
    domainName: 'onlinedugnad.no',
    keySelector: 'zoho',
    privateKey: process.env.MAIL_DKIM_KEY
  },
  auth: {
    user: 'noreply@onlinedugnad.no',
    pass: process.env.MAIL_PASSWORD
  }
};

let transporter = nodemailer.createTransport(smtpConfig);

transporter.use('compile', hbs({
    viewEngine: {
      extname: '.hbs'
      // layoutsDir: __dirname + '/../emails',
      // defaultLayout: 'template',
      // partialsDir: __dirname + '/../emails/partials'
    },
    viewPath: __dirname + '/../emails',
    extName: '.hbs'
  }
));

module.exports = transporter;

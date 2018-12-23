const functions = require('firebase-functions');
const nodemailer = require('nodemailer');


const myPassword = functions.config().gmail.password;
const myEmail = functions.config().gmail.email;

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: myEmail,
    pass: myPassword,
  }
});

exports.sendEmailWhenRequestSubmit = functions.database.ref('/leads/{id}').onCreate((snapshot, context) => {
  const val = snapshot.val();
  const mailOptions = {
    from: '" Blue Bird Flowers" ',
    to: "bluebirdflowerrs@gmail.com",
  };
  mailOptions.subject = "Bluebird Flowers Contact Form";
  mailOptions.html =
                    "<b>message:</b> "       +   val.message   + "<br>" +
                    "<b>phone number:</b> "  +   val.number    + "<br>" +
                    "<b>email:</b> "         +   val.email     + "<br>" +
                    "<b>first name:</b> "    +   val.firstName + "<br>" +
                    "<b>last name:</b> "     +   val.lastName;

  return mailTransport.sendMail(mailOptions)
    .then(() => console.log('This is happening'))
    .catch((error) => console.error('There was an error', error));
});


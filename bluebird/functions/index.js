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
  console.log(val);
  const mailOptions = {
    from: '" Blue Bird Flowers" ',
    to: "bluebirdflowersllc@gmail.com",
    bcc: "bluebirdflowerrs@gmail.com",
  };
  mailOptions.subject = "Bluebird Flowers Contact Form";
  mailOptions.html =
                    "<b>first name:</b> "    +   val.first  + "<br>" +
                    "<b>last name:</b> "     +   val.last   + "<br>" +
                    "<b>phone number:</b> "  +   val.phone  + "<br>" +
                    "<b>email:</b> "         +   val.email  + "<br>" +
                    "<b>message:</b> "       +   val.message ;


  return mailTransport.sendMail(mailOptions)
    .then(() => console.log('This is happening', val))
    .catch((error) => console.error('There was an error', error));
});


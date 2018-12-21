const functions = require('firebase-functions');
const nodemailer = require('nodemailer');



const myPassword = functions.config().password;
const myEmail = functions.config().email;

const mailTransport = nodemailer.createTransport({
  auth: {
    user: myEmail,
    pass: myPassword,
  }
});


exports.sendEmailWhenRequestSubmit = functions.database.ref('leads').onWrite((change) => {
  const snapshot = change.after;
  const val = snapshot.val();
  if(!snapshot.cahnges('subscribedToMailingLIst')) {
    return null;
  }
  const mailOptions = {
    from: '" Blue Bird Flowers" <bluebirdflowers@gmail.com>',
    to: "bluebirdflowers@gmail.com",
  };
  const subscribed = false;
  mailOptions.subject = "New request form.";
  mailOptions.text =
                    val.message + 
                    val.number + 
                    val.email + 
                    val.firstName + 
                    val.lastName;

  return mailTransport.sendMail(mailOptions)
    .then(() => console.log('This is happening'))
    .catch((error) => console.error('There was an error'));
});


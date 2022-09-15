import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Take a look at the "from" parameter format and fill out the "to", "mediaUrl" and "body" parameters.
// The "mediaUrl" parameter must be a fully qualified URL to an image/some media you want to send
// with your message
client.messages
  .create({
    from: process.env.TWILIO_SENDER,
    to: process.env.TWILIO_RECEIVER,
    mediaUrl: 'https://i.ytimg.com/vi/U_JbTHp6uzI/maxresdefault.jpg',
    body: 'Hello there!'
  })
  .then(message => {
    console.log(
      'Copy this MMS SID. How does it look different from an SMS SID?'
    );
    console.log(`${message.sid}`);
  })
  .catch(error => {
    console.error('Looks like the Twilio API returned an error:');
    console.error(error);
  });
import express from 'express';
import twilio from 'twilio';
import bodyParser from 'body-parser';
const { MessagingResponse } = twilio.twiml;

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(`Hello From Node Server!\n ${JSON.stringify(req.body)}`);
});

app.post('/sms', (req, res) => {
  const name = req.body.Name;
  const messageBody = req.body.Body;

  // Start our TwiML response.
  const twiml = new MessagingResponse();

  // Add a text message.
  const msg = twiml.message(`Hello ${name}, you sent ${messageBody}`);
  console.log(msg);

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
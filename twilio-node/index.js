import express from 'express';
import bodyParser from 'body-parser';
import twilio from 'twilio';

const { MessagingResponse } = twilio.twiml;
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(`Hello From Node Server!\n ${JSON.stringify(req.body)}`);
});

app.post('/sms', (req, res) => {
  const From = req.body.From;
  const messageBody = req.body.Body;

  
  console.log(`${From} sent message\nMESSSAGE: ${messageBody}.`)

  const twiml = new MessagingResponse();
  twiml.message(`Hello ${From}, you said: ${messageBody}`);

  res.type('text/xml').send(twiml.toString());
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
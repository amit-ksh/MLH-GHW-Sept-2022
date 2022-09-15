import twilio from "twilio";
const { MessagingResponse } = twilio.twiml;

import http from 'http'
import express from 'express'
import bodyparser from "body-parser";

// Set up our express web application
const PORT = 3000;
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));

// Create a route to handle incoming SMS messages
app.post('/sms', (request, response) => {
  console.log(
    `Incoming message from ${request.body.From}: ${request.body.Body}`
  );

  const twiml = new MessagingResponse();

  twiml.message('TwilioQuest rules');

  response.type('text/xml').send(twiml.toString());
  response.send(`
    <Response>
      <Message action="/status">${request.body.MessageStatus}</Message>
    </Response>
  `);
});


app.post('/redirect', (request, response) => {
  console.log('Redirect request received! Responding...');
  response.type('text/xml');
  response.send(`
    <Response>
      <Message>Hi there! I am TwiML from a Redirect.</Message>
      <Redirect>https://demo.twilio.com/welcome/sms/</Redirect>
    </Response>
  `);
});

app.post('/status', (request, response) => {
  console.log(`Message SID ${request.body.MessageSid} has a status of ${request.body.MessageStatus}`);
});

// Create and run an HTTP server which can handle incoming requests
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Express server listening on localhost:${PORT}`);
});
      


      
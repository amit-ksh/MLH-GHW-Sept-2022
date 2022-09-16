"""Simple Flask web app
"""

import os
from flask import Flask, request
from twilio.rest import Client

account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']

app = Flask(__name__)

@app.route("/")
def hello():
  """Say 'Hello From Python!' to visitors
  """
  return "Hello From Python!"


@app.route('/sms', methods=['POST'])
def sms():
  """Sending the message to Twilio
  """
  number = request.form['From']
  message = request.form['Body']
  print(f'Message from {number}, with contents: {message}')

  client = Client(account_sid, auth_token)

  message = client.messages.create(
                      messaging_service_sid=request.form['MessagingServiceSid'],
                      body=f'Hello {number}, you said: {message}',
                      to=number
                    )

  return str(message)


if __name__ == "__main__":
  app.run(debug=True, port=3000)

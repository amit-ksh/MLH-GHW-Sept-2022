"""Simple Flask web app
"""

from flask import Flask, request


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
  message_body = request.form['Body']
  print(f'Message from {number}, with contents: {message_body}')

  return str('Sent!')

if __name__ == "__main__":
  app.run(debug=True)

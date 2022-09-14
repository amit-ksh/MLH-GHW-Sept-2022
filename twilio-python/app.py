"""Simple Flask web app
"""

from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
  """Say 'Hello From Python!' to visitors
  """
  return "Hello From Python!"

if __name__ == "__main__":
  app.run()

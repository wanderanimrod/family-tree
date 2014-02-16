from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Family Tree! Yey!!"

if __name__ == "__main__":
    app.run()

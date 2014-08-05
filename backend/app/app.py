from flask import Flask, render_template
from api.routes import setup_routes

app = Flask(__name__)


@app.route("/")
def hello():
    return render_template("index.html")

setup_routes(app)

if __name__ == "__main__":
    app.run()

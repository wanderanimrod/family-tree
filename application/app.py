from flask import Flask, render_template, send_from_directory
from api.routes import setup_routes


app = Flask(__name__, static_folder='bower_components')


@app.route("/")
def hello():
    return render_template("index.html")

setup_routes(app)


@app.route("/<path:filename>")
def custom_static(filename):
    return send_from_directory(app.root_path + "/static/", filename)

if __name__ == "__main__":
    app.run()
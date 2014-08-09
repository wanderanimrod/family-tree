from flask import Flask, render_template, send_from_directory
from application.backend.api.routes import setup_routes


# Should not have this static_folder thing after we user browserify to build css
app = Flask(__name__, static_folder='../client/bower_components')


@app.route("/")
def hello():
    return render_template("index.html")

setup_routes(app)


# Should not have this non-default thing after we use browserify to build css
@app.route("/<path:filename>")
def custom_static(filename):
    return send_from_directory(app.root_path + "/static/", filename)

if __name__ == "__main__":
    app.run()

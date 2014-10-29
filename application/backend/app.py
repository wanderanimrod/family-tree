from flask import Flask, render_template, send_from_directory
from application.backend.api.routes import setup_api_routes


# Should not have this static_folder thing after we use browserify to build css
app = Flask(__name__, static_folder='../client')
app.debug = True


@app.route("/")
def index():
    return render_template("index.html")

setup_api_routes(app)

if __name__ == "__main__":
    app.run()
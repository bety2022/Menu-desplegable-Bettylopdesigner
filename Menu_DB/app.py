# ===================================================
# BettyLopDesigner — Menú Desplegable
# Servidor en Python (Flask) para servir los archivos
# ===================================================
#
# Instalación:
#   pip install flask
#
# Ejecución:
#   python app.py
#   Luego abre http://127.0.0.1:5000 en tu navegador

from flask import Flask, send_from_directory

app = Flask(__name__, static_folder=".", static_url_path="")


@app.route("/")
def home():
    return send_from_directory(".", "index.html")


if __name__ == "__main__":
    app.run(debug=True)

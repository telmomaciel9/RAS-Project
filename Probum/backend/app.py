# app.py
from flask import Flask
from flask_mysqldb import MySQL
import secrets


app = Flask(__name__)
import routes

# Configure MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '12345'
app.config['MYSQL_DB'] = 'RAS'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

app.secret_key = secrets.token_hex(16)  # 16 bytes = 32 hex characters

if __name__ == '__main__':
    app.run(debug=True)

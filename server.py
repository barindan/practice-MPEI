from datetime import datetime

import psycopg2
from psycopg2.extras import DictCursor
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
conn = psycopg2.connect(dbname='mpei_db', user='mpei', password='AivQsp12D', host='localhost', port='5432')

origins = [
    "http://localhost:3001",
           ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/save_user/{username}")
def save_username(username: str):
    with conn.cursor(cursor_factory=DictCursor) as cursor:
        cursor.execute('INSERT INTO users (username, date_added) VALUES (%s, %s)', (username, datetime.now()))
        conn.commit() 
    return {"username": username}


@app.get("/get_user/{id}")
def get_user(id: str):
    with conn.cursor(cursor_factory=DictCursor) as cursor:
        cursor.execute('SELECT username, date_added FROM users WHERE id=%s', (id))
        response = cursor.fetchone()
    if response: 
        return {"username": response[0], "Date added": response[1], "error": False}
    else:
        return {"error": "username not found"}





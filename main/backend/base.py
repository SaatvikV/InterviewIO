from flask import Flask, request, redirect, jsonify
from audio_processing import *
from ChatGPT import ChatApp
import base64
import tempfile
import os

api = Flask(__name__)
app = ChatApp(model="gpt-3.5-turbo")

@api.route('/audio', methods=['POST'])
def get_audio():
    if request.method == 'POST':
        global app
        words = request.args.get('words')
        res = app.chat(words)
        return res["content"]

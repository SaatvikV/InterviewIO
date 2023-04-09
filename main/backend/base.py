from flask import Flask, request, redirect, jsonify
from audio_processing import *
from ChatGPT import ChatApp

api = Flask(__name__)
app = ChatApp(model="gpt-3.5-turbo")
@api.route('/audio', methods=['POST'])
def get_audio():
    if request.method == 'POST':
        audio = request.args.get('audio') #get audio from front end
        # prompt = request.args.get('prompt') #get prompt

        # text = speech_to_text(file=audio)
        # res = app.chat(text["text"])



        # return res["content"]


@api.route('/test', methods=['POST', 'GET'])
def test():

    return {
        "name": request.args.get('firstName'),
        "last": request.args.get('lastName')
    }

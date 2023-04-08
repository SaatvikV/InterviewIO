from flask import Flask, request, redirect, jsonify
from audio_processing import *

api = Flask(__name__)

@api.route('/audio', methods=['GET'])
def get_audio():
    if request.method == 'GET':
        audio = request.args.get('audio') #get audio from front end
        # prompt = request.args.get('prompt') #get prompt 
        
        speech_to_text(file=audio)
        
        return transcribe



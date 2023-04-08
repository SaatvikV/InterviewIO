from flask import Flask, request, redirect, jsonify
from audio_processing import *

api = Flask(__name__)

@api.route('/audio', methods=['GET', 'POST'])
def get_audio():
    if request.method == 'POST':
        audio = request.args.get('audio') #get audio from front end
        prompt = request.args.get('prompt') #get prompt 
        
        transcribe(file=audio, prompt=prompt)
        
        return transcribe



# Get account key
import sys
sys.path.append('../../')
import key

import openai

# Set API key
openai.api_key = key.KEY

def speech_to_text(file: str) -> str:
    """
    Reads in a file then tries to convert to text using openai call. File uploads are currently 
    limited to 25 MB and the following input file types are supported:
    mp3, mp4, mpeg, mpga, m4a, wav, and webm.
    """
    audio_file = open(file, 'rb')
    try:
        return openai.Audio.transcribe('whisper-1', audio_file)['text']
    except UnicodeDecodeError:
        raise Exception('could not read file')

def transcribe(file: str, prompt: str) -> str: 
    """
    Prompt informed transcription of audio file.
    """
    audio_file = open(file, 'rb')
    prompt = 'This transcription is of an interviewee responding to a question about their background. The prompt they were given was: ' + prompt
    
    try:
        return openai.Audio.transcribe('whisper-1', audio_file, prompt=prompt)['text']
    except UnicodeDecodeError:
        raise Exception('could not read file')

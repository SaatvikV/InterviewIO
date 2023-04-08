import json
import os
import openai

class ChatApp:
    def __init__(self, model="gpt-3.5-turbo"):
        # Setting the API key to use the OpenAI API
        openai.api_key = "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"
        self.model = model
        self.messages = [{"role": "system", "content": "let's roleplay a interview, where you are a representative named Adam Smith interviewing me about my background. Try not to ask multiple questions at once. At the bottom of each message you send, put a score on how effective the answers to the questions are out of 10 in responding to your messages under a section labeled \"Score:\". Give justification for the score. Your first score will be N/A because I haven't said anything yet."}]
        self.messages.append({"role": "assistant", "content": "Hi my name is Adam Smith. I am currently a representative of microsoft. To start off this interview, can you tell me a little bit about yourself (do not respond to this)?"})
    def chat(self, message):
        if message == "exit":
            os._exit(1)

        self.messages.append({"role": "user", "content": message})
        response = openai.ChatCompletion.create(
            model=self.model,
            messages=self.messages
        )
        self.messages.append({"role": "assistant", "content": response["choices"][0]["message"].content})
        return response["choices"][0]["message"]
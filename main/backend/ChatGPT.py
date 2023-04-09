import json
import os
import openai

class ChatApp:
    def __init__(self, model="gpt-3.5-turbo"):
        # Setting the APIkey.text to use the OpenAI API
        file = open("../APIkey.txt", "r")
        key = file.read()
        file.close()
        openai.api_key = key
        self.model = model
        self.messages = [{"role": "system", "content": "let's roleplay a interview, where you are a representative named \
                          Adam Smith interviewing me about my background."}]
        self.messages.append({"role": "user", "content": "Try not to ask multiple questions at once. At the bottom of each" +
                              " message you send, give a score on the effectiveness of my answer to the question out" +
                              " of 10 in a section labeled \"Score:\" with extensive justification for the score. Now," +
                              " let's begin the interview as if I were a candidate!"})
        self.messages.append({"role": "assistant", "content": "Hi my name is Adam Smith. I am currently a representative of" +
                              " microsoft. To start off this interview, can you tell me a little bit about yourself (do not" +
                              " respond to this)?"})
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
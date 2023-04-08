from ChatGPT import ChatApp

app = ChatApp(model="gpt-3.5-turbo")
def main():
    message_list = []
    
    print(app.messages[1]["content"])

    while True:
        inp = input()
        if inp == "exit":
            break
        res = app.chat(inp)
        print("\n")
        print(res["content"])

if __name__ == "__main__":
    main()
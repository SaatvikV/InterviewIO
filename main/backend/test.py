from ChatGPT import ChatApp

app = ChatApp(model="gpt-3.5-turbo")
def main():    
    print(app.messages[2]["content"])

    while True:
        inp = input()
        if inp == "exit":
            break
        res = app.chat(inp)
        print("\n")
        print(res["content"])

if __name__ == "__main__":
    main()
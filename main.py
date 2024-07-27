from flask import Flask, render_template, jsonify, request, redirect, url_for
from flask_pymongo import PyMongo
import openai

openai.api_key = "API KEY"

app = Flask(__name__)
app.config["MONGO_URI"] = "MONGO CLUSTER"
mongo = PyMongo(app)

@app.route("/")
def home():
    chats = mongo.db.chats.find({})
    myChats = [chat for chat in chats]
    print(myChats)
    return render_template("index.html", myChats = myChats)

@app.route("/delete_query", methods=["POST"])
def delete_query():
    if request.method == "POST":
        question_to_delete = request.form.get("question")

        mongo.db.chats.delete_one({"question": question_to_delete})

        return redirect(url_for("home"))


@app.route("/api", methods=["GET", "POST"])
def qa():
    if request.method == "POST":
        print(request.json)
        question = request.json.get("question")
        chat = mongo.db.chats.find_one({"question": question})
        print(chat)
        if chat:
            data = {"question": question, "answer": f"{chat['answer']}"}
            return jsonify(data)
        else:
            response = openai.Completion.create(
                    model="gpt-3.5-turbo-instruct",
                    prompt=question,
                    temperature=0.7,
                    max_tokens=4000,
                    top_p=1,
                    frequency_penalty=0,
                    presence_penalty=0
                    )
            print(response)
            data = {"question": question, "answer": response["choices"][0]["text"]}
            mongo.db.chats.insert_one({"question": question, "answer": response["choices"][0]["text"]})
            return jsonify(data)
    data = {"result": "Thank you! I'm just a machine learning model designed to respond to questions and generate text based on my training data. Is there anything specific you'd like to ask or discuss? "}
        
    return jsonify(data)

app.run(debug=True, port=2001)
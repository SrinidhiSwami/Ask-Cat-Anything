from flask import Flask,request,jsonify
from textblob import TextBlob
from flask_cors import CORS
import random

app=Flask(__name__)
CORS(app)

@app.route('/ask',methods=['POST'])
def ask_cat():
    data=request.get_json()
    text=data.get('val')
    polarity=TextBlob(text).sentiment.polarity
    if polarity > 0.2:
        answer = "Yes!!"
    elif polarity < -0.2:
        answer = "No!!"
    else:
        answer = random.choice(["Yes!!", "No!!"])
    
    return jsonify({"answer": answer})

if __name__=='__main__':
    app.run(debug=True)
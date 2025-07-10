# 🐱 Ask Cat Anything

Ever wondered what a cat thinks about your life choices?  
Now you don’t have to.

**Ask Cat Anything** is a whimsical web app where a slightly psychic cat gives you a **Yes** or **No** answer to any question — powered by basic sentiment analysis (TextBlob) and cat logic 🧠+🐾.

---

## ✨ Features

- 🔮 Ask any Yes/No question
- 🤖 AI-assisted sentiment detection (TextBlob)
- 🎵 Sound effects and cat animations
- 😼 Judgmental cat attitude, absolutely free
- 📦 Lightweight frontend + Flask backend

---

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python (Flask)
- **AI Magic**: [TextBlob](https://textblob.readthedocs.io/en/dev/) for sentiment analysis

---

## 💬 How It Works

1. User asks a yes/no question.
2. The question is sent to the Flask backend via `fetch()`.
3. `TextBlob` checks if the sentiment is positive, negative, or neutral.
4. Based on that, the cat replies:
   - `Yes!!` if sentiment > 0.2
   - `No!!` if sentiment < -0.2
   - Randomly yes/no if neutral
5. Cat meows.


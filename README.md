# FlightBot

A conversational flight booking chatbot powered by IBM Watson's Natural Language Understanding, Speech-to-Text, and Text-to-Speech services. Built with Node.js and Express, and designed to run on IBM Bluemix.

---

## How It Works

The bot accepts natural language input from users and routes it through the **IBM Watson Conversation** (Assistant) API to understand intent and extract booking details (origin, destination, dates, etc.). The Express backend handles communication between the frontend chat UI and the Watson API, and the frontend is built with Materialize CSS for a clean, chat-style interface.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express |
| AI / NLU | IBM Watson Conversation (Assistant) API |
| Speech | IBM Watson Speech-to-Text, Text-to-Speech |
| Frontend | HTML, CSS, Materialize CSS |
| Platform | IBM Bluemix |

---

## Project Structure

```
FlightBot/
├── server.js        # Express server + Watson API integration
├── auth.js          # Watson API credentials config
├── package.json
└── public/
    ├── index.html   # Chat UI
    └── src/
        └── styles.css
```

---

## Getting Started

### Prerequisites

- Node.js
- An [IBM Cloud](https://cloud.ibm.com) account
- A Watson Assistant (Conversation) service instance with a configured workspace

### Installation

```bash
git clone https://github.com/your-username/FlightBot.git
cd FlightBot
npm install
```

### Configuration

Open `auth.js` and replace the placeholder credentials with your Watson service credentials:

```js
module.exports = {
  conversation: {
    url: "https://gateway.watsonplatform.net/conversation/api",
    username: "YOUR_WATSON_USERNAME",
    password: "YOUR_WATSON_PASSWORD",
    version: "v1",
    version_date: "2018-03-10"
  }
};
```

Also update the `workspace_id` in `server.js` with your Watson Assistant workspace ID.

### Run

```bash
node server.js
# Server running at http://localhost:3000
# Chat UI available at http://localhost:3000/watson
```

---

## API

| Endpoint | Method | Description |
|---|---|---|
| `/watson` | GET | Serves the chat frontend |
| `/api` | GET | Sends a test message to Watson and returns the response |

---

## License

MIT — see [LICENSE](./LICENSE) for details.

---

## Author

**Abhishek Roy** — [GitHub](https://github.com/AbhiRoy96)

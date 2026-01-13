README.md

# Simple Chatbot Logic

## Description

This is a simple rule-based chatbot that accepts user questions, matches them to predefined intents using keyword matching, and returns an appropriate response.

---

## Usage

You can use the chatbot by calling the `chatBot` function in Node.js or in the browser console:

```javascript
chatBot("What documents do I need?");
chatBot("How can I check my status?");
chatBot("I need support");
```

## How it works

- User input is converted to lowercase for case-insensitive matching.
- The `chatBot()` function checks for specific keywords in order and returns a corresponding response.
- If no keywords match, a default message is returned.

## Extending with AI

This chatbot could be extended using an AI API (e.g., OpenAI) to:

- Understand a wider range of user questions
- Interpret more complex phrasing or synonyms
- Provide more detailed explanations or guidance
- The current rule-based approach works well for simple, predefined keywords.

## Notes

- Written in JavaScript (ES6)
- Easy to maintain and extend
- Designed for demonstration purposes for a Junior Developer assessment

// Main chatbot function
// Accepts user input, matches it to predefined intents via keyword matching, and returns a response
function chatBot(userInput) {
  // Convert input to lowercase to make matching case-insensitive
  let input = userInput.toLowerCase();

  // Intent: user wants to check application status
  if (input.includes("status")) {
    return "You can check your application status on the dashboard.";

    // Intent: user wants information about required documents
  } else if (input.includes("document")) {
    return "Required documents are listed in the documentation section.";

    // Intent: user needs support or contact information
  } else if (input.includes("support")) {
    return "You can contact our Operations staff by email ops@example.com.";

    // Default response if intent is not recognized
  } else {
    return "Sorry, I did not understand your question. Please rephrase.";
  }
}

// Example usage:
console.log(chatBot("What documents do I need?"));
console.log(chatBot("How can I check my status?"));
console.log(chatBot("I need support"));
console.log(chatBot("Random question"));

/**
 * Note: This chatbot could be extended using an AI API (e.g., OpenAI)
 * AI could interpret more complex questions, synonyms, or varied phrasing
 * and provide more detailed responses, beyond simple keyword matching.
 * */

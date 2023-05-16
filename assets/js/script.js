const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');

let apiQuotes = [];

// GET RANDOM QUOTE
function getRandomQuote() {
    // PICK A RANDOM QUOTE FROM APIQUOTES
    let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // CHECK IF AUTHOR FIELD IS EMPTY AND REPLACE IT WITH UNKNOWN
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // CHECK QUOTE LENGTH TO DETERMINE STYLING
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;
}

// GET QUOTES FROM API
async function getQuotes() {
    const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        getRandomQuote();
    } catch (error) {
        // CATCH ERROR HERE
    }
}

// ON LOAD
getQuotes();
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('author-text');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');

let apiQuotes = [];

// GET RANDOM QUOTE
function getRandomQuote() {
    let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
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
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// SHOW LOADING
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// HIDE LOADING
function complete() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// GET RANDOM QUOTE
function getRandomQuote() {
    loading();
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

    // SET QUOTE AND HIDE LOADER
    complete();
    quoteText.textContent = quote.text;
}

// GET QUOTES FROM API
async function getQuotes() {
    loading();
    const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        getRandomQuote();
    } catch (error) {
        // CATCH ERROR HERE
    }
}

// TWEET QUOTE
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// EVENT LISTENERS
newQuoteButton.addEventListener('click', getRandomQuote);
twitterButton.addEventListener('click', tweetQuote);

// ON LOAD
getQuotes();
let apiQuotes = [];

// GET QUOTES FROM API
async function getQuotes() {
    const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
    } catch (error) {
        // CATCH ERROR HERE
    }
}

// ON LOAD
getQuotes();
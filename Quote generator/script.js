const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const instaBtn = document.getElementById('instagram');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// show loading

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// hide loading

function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show new quote
 function newQuote() {
    loading();
 }

// show new quote
function newQuote() {
// pick a random quote
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

// check if author field is blank and replace it with unknown
if (!quote.author) {
    authorText.textContent = 'Unknown';
} else {
    authorText.textContent = quote.author;
}
// check quote length to determine styling

if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
} else {
    quoteText.classList.remove('long-quote');
}
quoteText.textContent = quote.text;
}

// Set Quote, Hide Loader

quoteText.textContent = quote.text;
complete();

// Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {

        //Catch error here
    }
}

// log into instagram and sgare it
function gramPost() {
    const loginGram = 'https://www.instagram.com/accounts/login/?hl=en';
    window.open(loginGram, '_blank')
} 

// Event Listeners

newQuoteBtn.addEventListener('click' , newQuote);
instaBtn.addEventListener('click' , gramPost )


getQuotes();
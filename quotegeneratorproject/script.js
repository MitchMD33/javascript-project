const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

fn load() {
  console.log(load);
}


let apiQuotes = [];

//Show new quote 
function newQuote() {
  //Pick a random from apiQuotes array 
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//Check if author field is blank and replace it with uknown 
if (!quote.author) {
  authorText.textContent = 'Unknown';
} else {
  authorText.textContent = quote.author;
}
if (quote.text.length > 50) {
  quoteText.classList.add('long-quote');
} else {
  quoteText.classList.remove('long-quote');
}
  quoteText.textContent = quote.text;
}

//Get Quotes from API 
async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
     newQuote();
  } catch (error) {
    //catch error here

  }
}

//Tweet Quote 
function tweetQuote() {
  const twitterUrl = `https://x.com/intent/post?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

//Event listners 
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//on load 
getQuotes();
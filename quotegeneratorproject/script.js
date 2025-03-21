const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader')




let apiQuotes = [];
//show loading 
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;

}

//Hide loading 
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}


//Show new quote 
function newQuote() {
  loading();
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
//Set Quote, Hide loader
  quoteText.textContent = quote.text;
  complete();
}

//Get Quotes from API 
async function getQuotes() {
  loading();
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

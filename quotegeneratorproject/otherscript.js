// Get Quote from API
async function getQuote() {
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
try {
  const response = await fetch(apiUrl + proxyUrl, { 
  mode: "no-cors"
});
  const data = await response.json();
  console.log(data);
} catch(error) {
  console.log('whoops', error);
  }
}

// On Load
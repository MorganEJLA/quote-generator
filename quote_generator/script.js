const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];
// get quotes from API//
function newQuote(){
    // pick a random quote from the array //
    // const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    // console.log(quote);
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
}
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try{
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
    } catch(error){
        //Catch error Here
    }
}

// // On Load run getQuotes function //

getQuotes();


//onload

// newQuote();
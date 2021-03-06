const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];
// get quotes from API//

function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;

}

function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}
function newQuote(){
    loading();
    // pick a random quote from the array //
    // const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    // console.log(quote);
    if(!quote.author){
        authorText.textContent = "Unknown";
    }else{
        authorText.textContent = quote.author;
    }
    //Check Quote Length //
    if(quote.text.length > 120){
        quoteText.classList.add("long-quote");
    }else {
        quoteText.classList.remove("long-quote");
    }
    //set quote, hide loader//
    quoteText.textContent = quote.text;
    complete();
}
async function getQuotes(){
    loading();
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

//function to tweet a quote//

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//onload

// newQuote();
// loading();
getQuotes();
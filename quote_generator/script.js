
let apiQuotes = [];
// get quotes from API//
function newQuote(){
    // pick a random quote from the array //
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
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

// On Load run getQuotes function //

getQuotes();
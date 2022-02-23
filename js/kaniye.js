/* by using arrow function*/
const loadQuote = () => {
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(data => displayQuote(data))
}
function displayQuote(quotes) {
    const quoteArea = document.getElementById('quote')
    quoteArea.innerText = quotes.quote;
    console.log(quotes)
}
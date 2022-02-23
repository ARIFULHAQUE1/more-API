const countryLoad = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountry(data))
}
countryLoad();
const displayCountry = (countries) => {

    const friendsDiv = document.getElementById('countries');
    countries.forEach(country => {

        const div = document.createElement('div');
        div.classList.add('country');
        const h3 = document.createElement('h3');
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>capital: ${country.capital}</p>

        <button onClick="loadCountryByName('${country.name.common}')">load Country</button>
        `
        friendsDiv.appendChild(div);
    });

}
const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayCountryes(data[0]));

}

const displayCountryes = (country) => {
    // console.log(country)
    const countryInfo = document.getElementById('country-info');
    countryInfo.innerHTML = `
    <h2>name:${country.name.common}</h2>,
    <p>popolation:${country.population},

    <img width="200px" margin="10px" src="${country.flags.png}" alt="">
    `
}
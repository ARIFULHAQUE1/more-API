const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchInput = searchField.value;
    searchField.value = ' ';

    // console.log(input);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayMeals(data.meals))
}
const displayMeals = (meals) => {
    console.log(meals)
    const searchResult = document.getElementById('search-result')
    meals.forEach(meal => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 300)}</p>
                    </div>
                </div>
        `
        searchResult.appendChild(div)

        // console.log(meal)
    });
}
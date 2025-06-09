function searchRecipe() {
    let input = document.getElementById("searchInput").value;
    let results = document.getElementById("results");
    results.textContent = "";

    if (!input) {
        results.textContent = "Please enter a search term";
        return;
    }

    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + input)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            if (!data.meals) {
                results.textContent = "No recipes found";
                return;
            }

            data.meals.forEach(function(meal) {
                let card = document.createElement("div");
                card.className = "bg-white p-4 rounded shadow mb-4";
                console.log(meal);

                let img = document.createElement("img");
                img.src = meal.strMealThumb;
                img.className = "w-full mb-2 rounded";

                let title = document.createElement("h2");
                title.textContent = meal.strMeal;
                title.className = "font-semibold";
                //console.log(meal.strmeal);

                let desc = document.createElement("p");
                desc.textContent = "Click for instructions";
                desc.className = "text-sm text-gray-600";

                card.appendChild(img);
                card.appendChild(title);
                card.appendChild(desc);

                card.onclick = function() {
                    desc.textContent = meal.strInstructions;
                    desc.className = "text-sm";
                    //console.log(meal.strInstructions);
                };
                results.appendChild(card);
            });
        });
}

function clearResults() {
    document.getElementById("searchInput").value = "";
    document.getElementById("results").textContent = "";
}
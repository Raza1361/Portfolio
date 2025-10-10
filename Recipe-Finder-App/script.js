  document.getElementById("btn").addEventListener("click", async () => {
      const query = document.getElementById("search").value.trim();
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();
      const recipesDiv = document.getElementById("recipes");
      const noResults = document.getElementById("noResults");

      recipesDiv.innerHTML = "";
      if (data.meals) {
        noResults.style.display = "none";
        data.meals.forEach(meal => {
          recipesDiv.innerHTML += `
            <div class="card">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
              <h3>${meal.strMeal}</h3>
              <a href="${meal.strSource || meal.strYoutube}" target="_blank">View Recipe</a>
            </div>`;
        });
      } else {
        noResults.style.display = "block";
      }
    });
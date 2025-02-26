const recipes = {
    italian: [
        {
            id: 1,
            name: "Spaghetti Carbonara",
            time: 30,
            difficulty: "Medium",
            servings: 2,
            ingredients: [
                "200g spaghetti",
                "100g pancetta or guanciale, diced",
                "2 large eggs",
                "50g Pecorino Romano cheese, grated",
                "50g Parmesan cheese, grated",
                "2 cloves garlic, minced",
                "Salt and black pepper to taste"
            ],
            instructions: [
                "Bring a large pot of salted water to a boil and cook spaghetti according to package instructions.",
                "In a large skillet, cook pancetta over medium heat until crispy, about 5 minutes.",
                "In a bowl, whisk together eggs, grated cheeses, and black pepper.",
                "Drain pasta, reserving 1/2 cup of pasta water.",
                "Add pasta to the skillet with pancetta, toss to combine.",
                "Remove from heat and quickly stir in the egg mixture, adding pasta water as needed to create a creamy sauce.",
                "Serve immediately with extra grated cheese and black pepper."
            ]
        },
        // Add 9 more Italian recipes here
    ],
    mexican: [
        {
            id: 1,
            name: "Quick Chicken Quesadillas",
            time: 20,
            difficulty: "Easy",
            servings: 2,
            ingredients: [
                "2 large flour tortillas",
                "200g cooked chicken, shredded",
                "1 cup shredded cheddar cheese",
                "1/4 cup chopped onion",
                "1/4 cup chopped bell pepper",
                "2 tbsp vegetable oil",
                "Salsa and sour cream for serving"
            ],
            instructions: [
                "Heat 1 tbsp oil in a large skillet over medium heat.",
                "Add onion and bell pepper, cook until softened, about 3 minutes.",
                "Place one tortilla in the skillet, sprinkle half with cheese.",
                "Add chicken, cooked vegetables, and more cheese on top.",
                "Fold the tortilla in half and cook until golden brown, about 2 minutes per side.",
                "Repeat with the second tortilla.",
                "Cut into wedges and serve with salsa and sour cream."
            ]
        },
        // Add 9 more Mexican recipes here
    ],
    japanese: [
        {
            id: 1,
            name: "Simple Miso Soup",
            time: 15,
            difficulty: "Easy",
            servings: 2,
            ingredients: [
                "3 cups water",
                "2 tsp dashi granules",
                "2 tbsp miso paste",
                "1/2 block silken tofu, cubed",
                "1 green onion, thinly sliced",
                "Wakame seaweed (optional)"
            ],
            instructions: [
                "In a medium saucepan, bring water to a boil and add dashi granules.",
                "Reduce heat to low and add tofu cubes.",
                "In a small bowl, whisk miso paste with a little hot dashi broth until smooth.",
                "Add miso mixture to the saucepan and stir gently.",
                "Add wakame if using, and simmer for 1 minute.",
                "Remove from heat and pour into bowls.",
                "Garnish with sliced green onions and serve."
            ]
        },
        // Add 9 more Japanese recipes here
    ],
    indian: [
        {
            id: 1,
            name: "Quick Chicken Curry",
            time: 30,
            difficulty: "Medium",
            servings: 2,
            ingredients: [
                "300g boneless chicken, cubed",
                "1 onion, finely chopped",
                "2 cloves garlic, minced",
                "1 tbsp ginger, grated",
                "2 tbsp curry powder",
                "1 can (400ml) coconut milk",
                "1 tbsp vegetable oil",
                "Salt to taste",
                "Cilantro for garnish"
            ],
            instructions: [
                "Heat oil in a large pan over medium heat.",
                "Add onion, garlic, and ginger. Cook until onion is translucent.",
                "Add curry powder and cook for 1 minute until fragrant.",
                "Add chicken and cook until it starts to brown.",
                "Pour in coconut milk and bring to a simmer.",
                "Cook for 15-20 minutes until chicken is cooked through and sauce thickens.",
                "Season with salt, garnish with cilantro, and serve with rice."
            ]
        },
        // Add 9 more Indian recipes here
    ]
};

let currentCuisine = 'italian';

function initApp() {
    const cuisineButtons = document.querySelectorAll('.cuisine-btn');
    cuisineButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentCuisine = button.dataset.cuisine;
            updateActiveButton(button);
            displayRecipeList(currentCuisine);
        });
    });

    displayRecipeList(currentCuisine);
}

function updateActiveButton(activeButton) {
    document.querySelectorAll('.cuisine-btn').forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}

function displayRecipeList(cuisine) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    recipes[cuisine].forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');
        recipeItem.innerHTML = `
            <h3>${recipe.name}</h3>
            <div class="recipe-info">
                <span>Time: ${recipe.time} mins</span> | 
                <span>Difficulty: ${recipe.difficulty}</span>
            </div>
        `;
        recipeItem.addEventListener('click', () => displayRecipeDetails(recipe));
        recipeList.appendChild(recipeItem);
    });
}

function displayRecipeDetails(recipe) {
    const recipeDetails = document.getElementById('recipe-details');
    recipeDetails.innerHTML = `
        <h2>${recipe.name}</h2>
        <p><strong>Time:</strong> ${recipe.time} minutes</p>
        <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
        <p><strong>Servings:</strong> ${recipe.servings}</p>
        <h3>Ingredients:</h3>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <h3>Instructions:</h3>
        <ol>
            ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
        </ol>
    `;
}

document.addEventListener('DOMContentLoaded', initApp);

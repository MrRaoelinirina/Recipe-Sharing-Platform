document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recipe-form');
    const titleInput = document.getElementById('title');
    const ingredientsInput = document.getElementById('ingredients');
    const instructionsInput = document.getElementById('instructions');
    const imageUrlInput = document.getElementById('image-url');
    const recipesList = document.getElementById('recipes');

    let recipes = [];

    function renderRecipes() {
        recipesList.innerHTML = recipes.map(recipe => `
            <li>
                <h3>${recipe.title}</h3>
                ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">` : ''}
                <h4>Ingredients</h4>
                <p>${recipe.ingredients}</p>
                <h4>Instructions</h4>
                <p>${recipe.instructions}</p>
            </li>
        `).join('');
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = titleInput.value;
        const ingredients = ingredientsInput.value;
        const instructions = instructionsInput.value;
        const image = imageUrlInput.value;

        if (title && ingredients && instructions) {
            recipes.push({ title, ingredients, instructions, image });
            titleInput.value = '';
            ingredientsInput.value = '';
            instructionsInput.value = '';
            imageUrlInput.value = '';

            renderRecipes();
        }
    });
})

class Smoothie {
    ingredients = [];
    size;

    constructor(size) {
        this.size = size;
    }
    addIngredient(ingredient)
    {
        this.ingredients.push(ingredient);
    }
}

let smoothie = new Smoothie("Large");

const output = document.querySelector("#output");
const addbanana = document.querySelector("#addbanana");

addbanana.addEventListener("click", banana)
function refreshOutput(smooth)
{
    output.textContent = "Your smoothie is " + smooth.size + ", containing " + smooth.ingredients.join();
}

function banana()
{
    smoothie.addIngredient("\na banana");
    refreshOutput(smoothie);
}
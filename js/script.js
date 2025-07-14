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

let smoothie = new Smoothie("Medium");

const output = document.querySelector("#output");

const small = document.querySelector("#small");
const medium = document.querySelector("#medium");
const large = document.querySelector("#large");

const addbanana = document.querySelector("#addbanana");
const addstrawberry = document.querySelector("#addstrawberry");
const addchocolate = document.querySelector("#addchocolate");

const order = document.querySelector("#order");

small.addEventListener("click", setSmall)
medium.addEventListener("click", setMedium)
large.addEventListener("click", setLarge)


addbanana.addEventListener("click", banana)
addstrawberry.addEventListener("click", strawberry)
addchocolate.addEventListener("click", chocolate)

order.addEventListener("click", setOutput)
function setOutput()
{
    output.textContent = "Your smoothie is " + smoothie.size + ", containing " + smoothie.ingredients.join();
}

function setSmall()
{
    smoothie.size = "Small";
}
function setMedium()
{
    smoothie.size = "Medium";
}
function setLarge()
{
    smoothie.size = "Large";
}

function banana()
{
    smoothie.addIngredient("\na banana");
}
function strawberry()
{
    smoothie.addIngredient("\na strawberry");
}
function chocolate()
{
    smoothie.addIngredient("\na piece of chocolate");
}
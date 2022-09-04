const plant = [
    {
        id: "herb",
        name: "Трави",
        article: "Greggory Lee, or Gregg"
    },
    {
        id: "sedum",
        name: "Седуми",
        article: "Седуми Lee, or Gregg"
    }
]

const menu = document.querySelector(".menu");
const mainInner = document.querySelector(".content");

function createContent({name, article}) {
    return (
        `<h1 class="main__title">${name}</h1>
        <p class="main__text">${article}</p>`
    );
};

const changeContent = function(event) {
    const selectPlant = plant.find((obj) => obj.id === event.target.id);
    mainInner.innerHTML = createContent(selectPlant);
};

menu.addEventListener("click", changeContent);
//Start Page
mainInner.innerHTML = createContent(plant[1]);
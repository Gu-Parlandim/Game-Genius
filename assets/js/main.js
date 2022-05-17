let order = [];
let clickOrder = [];
let score = 0;

const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const allColors = document.querySelectorAll(".genius div")



let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}


let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add("selected");
    }, number - 250);

    setTimeout(() => {
        element.classList.remove("selected");
    }, number)
}

let checkOrder = () => {
    for(let i in clickOrder){
        if(clickOrder[i] != order[i]){
            gameOve();
            break;
        }
    }
    if (clickOrder.length == order.length){
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}


let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add("selected");

    setTimeout(() => {
        createColorElement(color).classList.remove("selected");
        checkOrder()
    }, 250);
}

let createColorElement = (color) => {
    const colors = {
        0: blue,
        1: yellow,
        2: red,
        3: green
    }
    return colors[color];
} 



let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOve = () => {
    alert(`Pontuação: ${score}\n Você perdeu! \nClique em OK para iniciar um novo jogo`);
    clickOrder = [];
    order = [];
    playGame()
}

let playGame = () => {
    score = 0
    alert("Bem vindo! iniciando um novo jogo")
    nextLevel()
}


allColors.forEach((element, index) => {
    element.addEventListener('click', () => {
        click(index);
    })
}) 


playGame();
const numberList = []

function createNumbers(n) {
    let numberList = document.querySelector("#number-list");
    for (let i = 1; i < n; i++) {
        let cellNumber = document.createElement("div");
        cellNumber.className = ("cells");
        let num = document.createElement("h3");
        num.innerText = i;
        cellNumber.appendChild(num);
        numberList.appendChild(cellNumber);
        document.querySelector("div button").addEventListener("click", generateNum);
    }
}

function generateNum() {
    let allNumbers = document.querySelectorAll("div h3")    
    let randomNum = Math.floor(Math.random() * 76) + 1;
    numberList.push(randomNum);
    let ranNum = allNumbers
    ranNum.innerText = randomNum;
    allNumbers.forEach((ele) => {
        if (randomNum == ele.textContent) {
            ele.style.backgroundColor = "red"
        }
    })
}
createNumbers(77)

function createCartel() {
    let cartels = document.querySelector("#cartels");
    for (let i = 1; i < 25; i++) {
        let cellNumber = document.createElement("div");
        cellNumber.className = "cells-cartel";
        let num = document.createElement("h3");
        num.innerText = Math.floor(Math.random() * 76) + 1;
        cellNumber.appendChild(num);
        cartels.appendChild(cellNumber);
    }
}
document.querySelector("#bottom-button").addEventListener("click", createCartel)

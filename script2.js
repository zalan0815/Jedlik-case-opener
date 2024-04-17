import { items_list } from "./data.js";
import { cases_list } from "./data.js";
import { getUserCases } from "./data.js";
import { addUserCase } from "./data.js";
import { Items } from "./class.js";
import { Cases } from "./class.js";
import { getMoney } from "./data.js";
import { addMoney } from "./data.js";

let items = Items.load_list(items_list);
let cases = Cases.load_list(cases_list);

getMoney();

console.log(items);
console.log(cases);

const cases_div = document.getElementById("cases_div");
for (let id = 0; id < cases.length; id++) {
    const element = cases[id];
    cases_div.innerHTML += '<div type="button" class="btn btn-primary col-2 m-2" id="case' + id + '" data-bs-toggle="modal" data-bs-target="#caseModal" data-id="' + element.id + '"><img src="'+ element.img +'" class="w-100"></div>';
}
for (let id = 0; id < cases.length; id++) {
    document.getElementById("case" + id).addEventListener("click", getCase);
}

function getCase() {
    const id = this.getAttribute('data-id');
    let selectedCase;
    cases.forEach(element => {
        if (element.id == id) {
            selectedCase = element;
        }
    });
    displayCase(selectedCase);
}

function displayCase(selectedCase) {
    const caseName = document.getElementById("case-name");
    const caseImg = document.getElementById("case-img");
    const caseItems = document.getElementById("case-items");
    const buy = document.getElementById("buy");
    buy.addEventListener("click", buyCase);
    
    caseItems.innerHTML = "";
    
    caseName.innerHTML = selectedCase.name;
    caseImg.src = selectedCase.img;
    let itemsInCase = [];
    items.forEach(element => {
        if (element.case == selectedCase.name) {
            itemsInCase.push(element);
        }
    });
    itemsInCase.forEach(element => {
        const item = document.createElement('div');
        item.innerHTML = '<img src="'+ element.img +'" class="w-100"></div>';
        item.className = 'col-2'
        
        caseItems.appendChild(item);
    });
    buy.case = selectedCase;
}

function buyCase(event) {
    const caseClass = event.currentTarget.case;
    const casePrice = caseClass.price;
    
    if(getMoney() >= casePrice) {
            addMoney(-casePrice);
            addUserCase(caseClass.id + ';' + caseClass.name + ';' + caseClass.img + ';' + caseClass.price);
            alert("You bought the case!");
        } else {
            alert("You don't have enough money!");
        }
}
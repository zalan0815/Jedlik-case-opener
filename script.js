import { items_list } from "./lists.js";
import { cases_list } from "./lists.js";
import { Items } from "./class.js";
import { Cases } from "./class.js";

let items = Items.load_list(items_list);
let cases = Cases.load_list(cases_list);

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
    const open = document.getElementById("open");
    open.addEventListener("click", opening);
    
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
    open.items = itemsInCase;
}

function opening(event) {
    const caseItems = document.getElementById("case-items");
    let itemsInCase = event.currentTarget.items;

    caseItems.innerHTML = '<canvas class="w-100 h-25" id="opening-canvas"></canvas>';
}
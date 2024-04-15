import { items_list } from "./data.js";
import { getUserCases } from "./data.js";
import { addUserCase } from "./data.js";
import { Items } from "./class.js";
import { Cases } from "./class.js";
import { getMoney } from "./data.js";
import { setMoney } from "./data.js";

let items = Items.load_list(items_list);
let cases = Cases.load_list(getUserCases());

// console.log(items);
// console.log(cases);

//defMoney(1000);
document.getElementById("user-money").innerHTML = getMoney();


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

function shuffle(list) {
    let i = list.length;

    while (i != 0) {
        let rndi = Math.floor(Math.random() * i);
        i--;

        [list[i], list[rndi]] = [list[rndi], list[i]];
    }
}

let ctx;
let c;
let w;
let imgSize = 300;
let speed = 100;
let count;
let itemsInCase;
let myInterval;
function opening(event) {
    const caseItems = document.getElementById("case-items");
    itemsInCase = event.currentTarget.items;
    shuffle(itemsInCase);

    caseItems.innerHTML = '<canvas class="w-100" id="opening-canvas"></canvas>';

    c = document.getElementById("opening-canvas");
    c.width = 1920;
    c.height = 1080;
    ctx = c.getContext("2d");
    w = 0;
    count = 0;
    myInterval = setInterval(animate, 1);
}


function animate() {
    let w2 = w;
    ctx.clearRect(0, 0, c.width, c.height);
        for (let index = 0; index < 10; index++) {
            itemsInCase.forEach(element => {
                let itemImg = new Image();
                itemImg.src = element.img;
                ctx.drawImage(itemImg, w2, 0, imgSize, imgSize * 1.8);
                w2 += imgSize;
            });
        }
        w -= speed;
        if (count % 5 == 0) {
            speed--;
        }
        if (speed <= 0) {
            clearInterval(myInterval); 
        }
        count++;
        console.log(speed);
}
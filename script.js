import { addUserItem, items_list } from "./data.js";
import { getUserCases } from "./data.js";
import { addUserCase } from "./data.js";
import { deleteUserCase } from "./data.js";
import { Items } from "./class.js";
import { Cases } from "./class.js";
import { getMoney } from "./data.js";
import { addMoney } from "./data.js";

let items = Items.load_list(items_list);
let cases = Cases.load_list(getUserCases());
console.log(cases);
if (cases.length != 0) {
    document.getElementById("nocases").style.display = "none";
}

let deleteCase;

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
            deleteCase = element;
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
        item.innerHTML = '<img src="'+ element.img +'" class=" w-100 hover-img"></div>';
        item.className = 'col-2 container'
        
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
let speed;
let count;
let itemsInCase;
let myInterval;
let openingInProgress = false;
function opening(event) {
    if (!openingInProgress) {
        openingInProgress = true;
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
        speed = 90;
        myInterval = setInterval(animate, 1);
    }
}

function animate() {
    let w2 = w;
    ctx.clearRect(0, 0, c.width, c.height);
    for (let index = 0; index < 15; index++) {
        itemsInCase.forEach(element => {
            let itemImg = new Image();
            itemImg.src = element.img;
            ctx.drawImage(itemImg, w2, c.height/2 - (imgSize * 1.8 / 2), imgSize, imgSize * 1.8);
            w2 += imgSize;
        });
    }
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(c.width/2, c.height/2 - (imgSize * 1.8 / 2));
    ctx.lineTo(c.width/2, c.height/2 + (imgSize * 1.8 / 2));
    ctx.stroke();
    w -= speed;
    if (count % 5 == 0) {
        speed--;
    }
    if (speed <= 0) {
        opened(w);
        clearInterval(myInterval); 
    }
    count++;
}

function opened(starting) {
    console.log("kész");
    let l = c.width/2 - starting;
    let numberOfImages = Math.ceil(l / imgSize);
    showItem(itemsInCase[((numberOfImages - 1) % itemsInCase.length + 1) - 1])    
}

function showItem(item) {
    document.getElementById("show-item").style.overflow = "hidden";
    const modal = new bootstrap.Modal(document.getElementById('show-item'), {
        backdrop: 'static',
        keyboard: false
    });
    
    modal.show();

    document.getElementById("item-name").innerHTML = item.name;
    document.getElementById("item-img").src = item.img;
    document.getElementById("item-price").innerHTML = item.price;
    document.querySelectorAll(".modal-body")[1].className = "modal-body " + item.rarity;
    document.getElementById("ok").addEventListener('click', () => {
        deleteUserCase(deleteCase);
        document.getElementById("show-item").style.overflow = "scroll";
        addUserItem(item.id + ';' + item.name + ';' + item.img + ';' + item.case + ';' + item.rarity + ';' + item.price);

        location.reload();
        openingInProgress = false;
    });
}
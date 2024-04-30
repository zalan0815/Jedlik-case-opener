import { items_list } from "./data.js";
import { getUserItems } from "./data.js";
import { addUserItem } from "./data.js";
import { deleteUserItem } from "./data.js";
import { Items } from "./class.js";
import { Cases } from "./class.js";
import { getMoney } from "./data.js";
import { addMoney } from "./data.js";

let items = Items.load_list(getUserItems());
if (items.length != 0) {
    document.getElementById("noitems").style.display = "none";
}
items.sort(function(a,b) {return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);} );

let deleteItem;

getMoney();

const items_div = document.getElementById("items_div");
for (let id = 0; id < items.length; id++) {
    const element = items[id];
    items_div.innerHTML += '<div type="button" class="btn btn-primary col-2 border border-5 rounded border-dark" id="item' + id + '" data-bs-toggle="modal" data-bs-target="#show-item" data-id="' + element.id + '"><img src="'+ element.img +'" class="item-img w-100 my-auto"></div>';
}
for (let id = 0; id < items.length; id++) {
    document.getElementById("item" + id).addEventListener("click", getItem);
}

function getItem() {
    const id = this.getAttribute('data-id');
    let selectedItem;
    items.forEach(element => {
        if (element.id == id) {
            selectedItem = element;
            deleteItem = element;
        }
    });
    displayItem(selectedItem);
}{}

function displayItem(selectedItem) {
    console.log(selectedItem);
    document.getElementById("show-item").style.overflow = "hidden";
    document.getElementById("item-name").innerHTML = selectedItem.name;
    document.getElementById("item-img").src = selectedItem.img;
    document.getElementById("item-price").innerHTML = selectedItem.price;
    document.querySelector(".modal-body").className = "modal-body " + selectedItem.rarity;
    document.getElementById("ok").addEventListener('click', () => {
        document.getElementById("show-item").style.overflow = "scroll";
    });
    document.getElementById("sell").addEventListener('click', () => {
        deleteUserItem(deleteItem);
        addMoney(deleteItem.price);
        document.getElementById("show-item").style.overflow = "scroll";
        location.reload();
    });
}
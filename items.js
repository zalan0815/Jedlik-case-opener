import { items_list } from "./data.js";
import { getUserItems } from "./data.js";
import { addUserItem } from "./data.js";
import { deleteUserItem } from "./data.js";
import { Items } from "./class.js";
import { Cases } from "./class.js";
import { getMoney } from "./data.js";
import { addMoney } from "./data.js";

let items = Items.load_list(getUserItems());

getMoney();

const items_div = document.getElementById("items_div");
for (let id = 0; id < items.length; id++) {
    const element = items[id];
    items_div.innerHTML += '<div type="button" class="btn btn-primary col-2 m-2" id="case' + id + '" data-bs-toggle="modal" data-bs-target="#caseModal" data-id="' + element.id + '"><img src="'+ element.img +'" class="w-100"></div>';
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
        }
    });
    displayCase(selectedItem);
}

function displayCase(selectedItem) {}
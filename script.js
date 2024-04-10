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
    cases_div.innerHTML += '<div type="button" class="btn btn-primary col-2 m-2" id="case' + id + '" data-bs-toggle="modal" data-bs-target="#caseModal"><img src="'+ element.img +'" class="w-100"></div>';
}
for (let id = 0; id < cases.length; id++) {
    document.getElementById("case" + id).addEventListener("click", getCase);
}

function getCase() {
    
}